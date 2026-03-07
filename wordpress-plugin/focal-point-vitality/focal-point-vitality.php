<?php
/**
 * Plugin Name: Focal Point Vitality
 * Plugin URI: https://focal-point-vitality-2dea.bolt.host
 * Description: Precision medical wellness in Scottsdale, AZ. Advanced hormone optimization, cellular (peptide) therapy, and medical weight management. Board-certified, evidence-based, personalized care at Focal Point Vitality.
 * Version: 1.0.1
 * Author: Focal Point Vitality
 * Author URI: https://focal-point-vitality-2dea.bolt.host
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: focal-point-vitality
 * Requires at least: 5.8
 * Requires PHP: 7.4
 */

if (!defined('ABSPATH')) {
    exit;
}

define('FOCAL_POINT_VITALITY_VERSION', '1.0.1');
define('FOCAL_POINT_VITALITY_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('FOCAL_POINT_VITALITY_PLUGIN_URL', plugin_dir_url(__FILE__));

class FOCAL_POINT_VITALITY_Plugin {

    private static $instance = null;

    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __construct() {
        add_action('wp_enqueue_scripts', array($this, 'enqueue_assets'));
        add_shortcode('focal_point_vitality', array($this, 'render_portfolio_shortcode'));
        add_filter('theme_page_templates', array($this, 'add_page_templates'));
        add_filter('template_include', array($this, 'load_page_template'));
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('wp_head', array($this, 'add_portfolio_metadata'), 1);
        add_action('wp_head', array($this, 'add_portfolio_favicon'), 2);
        add_filter('document_title_parts', array($this, 'filter_page_title'), 10);
        register_activation_hook(__FILE__, array($this, 'activate'));
    }

    public function activate() {
        flush_rewrite_rules();
    }

    public function enqueue_assets() {
        global $post;

        $load_assets = false;

        if (is_a($post, 'WP_Post') && has_shortcode($post->post_content, 'focal_point_vitality')) {
            $load_assets = true;
        }

        if (is_page_template('focal-point-vitality-fullwidth.php')) {
            $load_assets = true;
        }

        if ($load_assets) {
            $manifest_path = FOCAL_POINT_VITALITY_PLUGIN_DIR . 'assets/.vite/manifest.json';

            if (file_exists($manifest_path)) {
                $manifest = json_decode(file_get_contents($manifest_path), true);

                if (isset($manifest['style.css']) && isset($manifest['style.css']['file'])) {
                    wp_enqueue_style(
                        'focal-point-vitality-styles',
                        FOCAL_POINT_VITALITY_PLUGIN_URL . 'assets/' . $manifest['style.css']['file'],
                        array(),
                        FOCAL_POINT_VITALITY_VERSION
                    );
                }

                if (isset($manifest['src/main.tsx'])) {
                    $main_entry = $manifest['src/main.tsx'];

                    if (isset($main_entry['css']) && is_array($main_entry['css'])) {
                        foreach ($main_entry['css'] as $index => $css_file) {
                            wp_enqueue_style(
                                'focal-point-vitality-app-css-' . $index,
                                FOCAL_POINT_VITALITY_PLUGIN_URL . 'assets/' . $css_file,
                                array(),
                                FOCAL_POINT_VITALITY_VERSION
                            );
                        }
                    }

                    if (isset($main_entry['file'])) {
                        wp_enqueue_script(
                            'focal-point-vitality-app',
                            FOCAL_POINT_VITALITY_PLUGIN_URL . 'assets/' . $main_entry['file'],
                            array(),
                            FOCAL_POINT_VITALITY_VERSION,
                            true
                        );

                        wp_script_add_data('focal-point-vitality-app', 'type', 'module');

                        wp_localize_script('focal-point-vitality-app', 'FOCAL_POINT_VITALITYConfig', array(
                            'pluginUrl' => FOCAL_POINT_VITALITY_PLUGIN_URL,
                            'assetsUrl' => FOCAL_POINT_VITALITY_PLUGIN_URL . 'assets/images/'
                        ));
                    }
                }
            } else {
                error_log('Focal Point Vitality: Manifest file not found at ' . $manifest_path);
            }

            wp_add_inline_style(
                wp_style_is('focal-point-vitality-styles', 'registered') ? 'focal-point-vitality-styles' : 'wp-block-library',
                '
                #focal-point-vitality-root,
                .focal-point-vitality-wrapper {
                    width: 100% !important;
                    max-width: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    position: relative;
                }
                .et_pb_section .focal-point-vitality-wrapper,
                .et_pb_row .focal-point-vitality-wrapper,
                .entry-content .focal-point-vitality-wrapper {
                    width: 100% !important;
                    max-width: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                '
            );
        }
    }

    public function render_portfolio_shortcode($atts) {
        $atts = shortcode_atts(array(
            'class' => '',
        ), $atts, 'focal_point_vitality');

        $class = !empty($atts['class']) ? ' ' . esc_attr($atts['class']) : '';

        ob_start();
        ?>
        <div id="focal-point-vitality-root" class="focal-point-vitality-wrapper<?php echo $class; ?>"></div>
        <?php
        return ob_get_clean();
    }

    public function add_page_templates($templates) {
        $templates['focal-point-vitality-fullwidth.php'] = __('Focal Point Vitality - Full Width', 'focal-point-vitality');
        return $templates;
    }

    public function load_page_template($template) {
        if (is_page_template('focal-point-vitality-fullwidth.php')) {
            $plugin_template = FOCAL_POINT_VITALITY_PLUGIN_DIR . 'templates/focal-point-vitality-fullwidth.php';
            if (file_exists($plugin_template)) {
                return $plugin_template;
            }
        }
        return $template;
    }

    public function add_admin_menu() {
        add_options_page(
            __('Focal Point Vitality Settings', 'focal-point-vitality'),
            __('Focal Point Vitality', 'focal-point-vitality'),
            'manage_options',
            'focal-point-vitality-settings',
            array($this, 'render_settings_page')
        );
    }

    public function render_settings_page() {
        ?>
        <div class="wrap">
            <h1><?php echo esc_html(get_admin_page_title()); ?></h1>
            <div class="card">
                <h2>How to Use This Plugin</h2>

                <h3>Quick Setup (3 Steps)</h3>
                <ol style="font-size: 16px; line-height: 1.8;">
                    <li><strong>Create a new page</strong> in WordPress (Pages &rarr; Add New)</li>
                    <li><strong>Add the shortcode:</strong> <code style="background: #f5f5f5; padding: 4px 8px; border-radius: 3px;">[focal_point_vitality]</code></li>
                    <li><strong>Publish the page</strong></li>
                </ol>

                <h3>Important: Divi Theme Settings</h3>
                <p>Since your site uses the Divi theme, for best results:</p>
                <ol style="font-size: 16px; line-height: 1.8;">
                    <li>Edit the page containing the shortcode</li>
                    <li>In the <strong>Divi Page Settings</strong> panel (right sidebar), set <strong>Page Layout</strong> to <strong>"Full Width"</strong></li>
                    <li>Make sure you are using the <strong>Classic Editor</strong> (not Divi Builder) with just the shortcode</li>
                    <li>Publish/Update the page</li>
                </ol>

                <h3>Shortcode Usage</h3>
                <p>Simply add this shortcode to any page:</p>
                <code style="display: block; padding: 15px; background: #f5f5f5; margin: 10px 0; font-size: 18px; border-radius: 4px;">[focal_point_vitality]</code>

                <h3>Alternative: Full-Width Template</h3>
                <p>If your theme supports it, you can also use the "Focal Point Vitality - Full Width" template:</p>
                <ol>
                    <li>Create or edit a page</li>
                    <li>In the sidebar, look for "Template" under Page settings</li>
                    <li>Select "Focal Point Vitality - Full Width"</li>
                    <li>Publish the page</li>
                </ol>

                <h3>Support</h3>
                <p>For questions or support, visit <a href="https://focal-point-vitality-2dea.bolt.host" target="_blank">https://focal-point-vitality-2dea.bolt.host</a></p>
            </div>
        </div>
        <style>
            .card {
                background: #fff;
                border: 1px solid #ccd0d4;
                padding: 30px;
                margin-top: 20px;
                box-shadow: 0 1px 1px rgba(0,0,0,.04);
                max-width: 900px;
            }
            .card h2 { margin-top: 0; font-size: 24px; }
            .card h3 { margin-top: 30px; font-size: 18px; color: #0073aa; }
            .card ul li { margin-bottom: 8px; }
        </style>
        <?php
    }

    private function is_portfolio_page() {
        global $post;

        if (is_page_template('focal-point-vitality-fullwidth.php')) {
            return true;
        }

        if (is_a($post, 'WP_Post') && has_shortcode($post->post_content, 'focal_point_vitality')) {
            return true;
        }

        return false;
    }

    public function add_portfolio_metadata() {
        if (!$this->is_portfolio_page()) {
            return;
        }

        $site_url = 'https://focal-point-vitality-2dea.bolt.host';
        $profile_image = FOCAL_POINT_VITALITY_PLUGIN_URL . 'assets/images/Vitality_Color_-_SMALL.png';
        $title = 'Focal Point Vitality | Hormone Therapy &amp; Medical Wellness — Scottsdale, AZ';
        $description = 'Precision medical wellness in Scottsdale, AZ. Advanced hormone optimization, cellular (peptide) therapy, and medical weight management. Board-certified, evidence-based, personalized care at Focal Point Vitality.';

        ?>
        <meta name="description" content="<?php echo esc_attr($description); ?>">
        <meta name="author" content="Focal Point Vitality">
        <meta property="og:type" content="website">
        <meta property="og:url" content="<?php echo esc_url($site_url); ?>">
        <meta property="og:title" content="<?php echo esc_attr($title); ?>">
        <meta property="og:description" content="<?php echo esc_attr($description); ?>">
        <meta property="og:image" content="<?php echo esc_url($profile_image); ?>">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:site_name" content="Focal Point Vitality">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:url" content="<?php echo esc_url($site_url); ?>">
        <meta name="twitter:title" content="<?php echo esc_attr($title); ?>">
        <meta name="twitter:description" content="<?php echo esc_attr($description); ?>">
        <meta name="twitter:image" content="<?php echo esc_url($profile_image); ?>">
        <meta name="robots" content="index, follow">
        <meta name="theme-color" content="#0a1628">
        <link rel="canonical" href="<?php echo esc_url($site_url); ?>">
        <?php
    }

    public function add_portfolio_favicon() {
        if (!$this->is_portfolio_page()) {
            return;
        }

        $favicon_url = FOCAL_POINT_VITALITY_PLUGIN_URL . 'assets/images/favicon.png';
        ?>
        <link rel="icon" type="image/png" href="<?php echo esc_url($favicon_url); ?>">
        <link rel="shortcut icon" type="image/png" href="<?php echo esc_url($favicon_url); ?>">
        <link rel="apple-touch-icon" href="<?php echo esc_url($favicon_url); ?>">
        <?php
    }

    public function filter_page_title($title_parts) {
        if (!$this->is_portfolio_page()) {
            return $title_parts;
        }

        return array(
            'title' => 'Focal Point Vitality | Hormone Therapy &amp; Medical Wellness — Scottsdale, AZ'
        );
    }
}

FOCAL_POINT_VITALITY_Plugin::get_instance();
