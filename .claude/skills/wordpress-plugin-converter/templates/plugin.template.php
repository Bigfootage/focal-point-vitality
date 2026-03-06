<?php
/**
 * Plugin Name: {{PLUGIN_NAME}}
 * Plugin URI: {{PLUGIN_URI}}
 * Description: {{PLUGIN_DESCRIPTION}}
 * Version: {{VERSION}}
 * Author: {{AUTHOR_NAME}}
 * Author URI: {{AUTHOR_URI}}
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: {{PLUGIN_SLUG}}
 * Requires at least: 5.8
 * Requires PHP: 7.4
 */

if (!defined('ABSPATH')) {
    exit;
}

define('{{PREFIX}}_VERSION', '{{VERSION}}');
define('{{PREFIX}}_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('{{PREFIX}}_PLUGIN_URL', plugin_dir_url(__FILE__));

class {{PREFIX}}_Plugin {

    private static $instance = null;

    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __construct() {
        add_action('wp_enqueue_scripts', array($this, 'enqueue_assets'));
        add_shortcode('{{SHORTCODE_NAME}}', array($this, 'render_portfolio_shortcode'));
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

        if (is_a($post, 'WP_Post') && has_shortcode($post->post_content, '{{SHORTCODE_NAME}}')) {
            $load_assets = true;
        }

        if (is_page_template('{{PLUGIN_SLUG}}-fullwidth.php')) {
            $load_assets = true;
        }

        if ($load_assets) {
            $manifest_path = {{PREFIX}}_PLUGIN_DIR . 'assets/.vite/manifest.json';

            if (file_exists($manifest_path)) {
                $manifest = json_decode(file_get_contents($manifest_path), true);

                if (isset($manifest['style.css'])) {
                    wp_enqueue_style(
                        '{{PLUGIN_SLUG}}-styles',
                        {{PREFIX}}_PLUGIN_URL . 'assets/' . $manifest['style.css']['file'],
                        array(),
                        {{PREFIX}}_VERSION
                    );
                }

                if (isset($manifest['src/main.tsx'])) {
                    $main_entry = $manifest['src/main.tsx'];

                    if (isset($main_entry['css']) && !empty($main_entry['css'])) {
                        foreach ($main_entry['css'] as $css_file) {
                            wp_enqueue_style(
                                '{{PLUGIN_SLUG}}-styles-inline',
                                {{PREFIX}}_PLUGIN_URL . 'assets/' . $css_file,
                                array(),
                                {{PREFIX}}_VERSION
                            );
                        }
                    }

                    if (isset($main_entry['file'])) {
                        wp_enqueue_script(
                            '{{PLUGIN_SLUG}}-app',
                            {{PREFIX}}_PLUGIN_URL . 'assets/' . $main_entry['file'],
                            array(),
                            {{PREFIX}}_VERSION,
                            true
                        );

                        wp_script_add_data('{{PLUGIN_SLUG}}-app', 'type', 'module');

                        wp_localize_script('{{PLUGIN_SLUG}}-app', '{{PREFIX}}Config', array(
                            'pluginUrl' => {{PREFIX}}_PLUGIN_URL,
                            'assetsUrl' => {{PREFIX}}_PLUGIN_URL . 'assets/images/'
                        ));
                    }
                }
            } else {
                error_log('{{PLUGIN_NAME}}: Manifest file not found at ' . $manifest_path);
            }

            wp_add_inline_style('{{PLUGIN_SLUG}}-styles', '
                #{{PLUGIN_SLUG}}-root {
                    width: 100%;
                    margin: 0 auto;
                }
            ');
        }
    }

    public function render_portfolio_shortcode($atts) {
        $atts = shortcode_atts(array(
            'class' => '',
        ), $atts, '{{SHORTCODE_NAME}}');

        $class = !empty($atts['class']) ? ' ' . esc_attr($atts['class']) : '';

        ob_start();
        ?>
        <div id="{{PLUGIN_SLUG}}-root" class="{{PLUGIN_SLUG}}-wrapper<?php echo $class; ?>"></div>
        <?php
        return ob_get_clean();
    }

    public function add_page_templates($templates) {
        $templates['{{PLUGIN_SLUG}}-fullwidth.php'] = __('{{PLUGIN_NAME}} - Full Width', '{{PLUGIN_SLUG}}');
        return $templates;
    }

    public function load_page_template($template) {
        if (is_page_template('{{PLUGIN_SLUG}}-fullwidth.php')) {
            $plugin_template = {{PREFIX}}_PLUGIN_DIR . 'templates/{{PLUGIN_SLUG}}-fullwidth.php';
            if (file_exists($plugin_template)) {
                return $plugin_template;
            }
        }
        return $template;
    }

    public function add_admin_menu() {
        add_options_page(
            __('{{PLUGIN_NAME}} Settings', '{{PLUGIN_SLUG}}'),
            __('{{PLUGIN_NAME}}', '{{PLUGIN_SLUG}}'),
            'manage_options',
            '{{PLUGIN_SLUG}}-settings',
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
                    <li><strong>Create a new page</strong> in WordPress (Pages → Add New)</li>
                    <li><strong>Add the shortcode:</strong> <code style="background: #f5f5f5; padding: 4px 8px; border-radius: 3px;">[{{SHORTCODE_NAME}}]</code></li>
                    <li><strong>Publish the page</strong></li>
                </ol>

                <h3>What This Plugin Does</h3>
                <ul>
                    <li>✅ Displays your complete React application</li>
                    <li>✅ Fully responsive and optimized for all devices</li>
                    <li>✅ Works with any WordPress theme</li>
                    <li>✅ Easy to use - just add the shortcode</li>
                </ul>

                <h3>Shortcode Usage</h3>
                <p>Simply add this shortcode to any page:</p>
                <code style="display: block; padding: 15px; background: #f5f5f5; margin: 10px 0; font-size: 18px; border-radius: 4px;">[{{SHORTCODE_NAME}}]</code>

                <h3>Alternative: Full-Width Template</h3>
                <p>If your theme supports it, you can also use the "{{PLUGIN_NAME}} - Full Width" template:</p>
                <ol>
                    <li>Create or edit a page</li>
                    <li>In the sidebar, look for "Template" under Page settings</li>
                    <li>Select "{{PLUGIN_NAME}} - Full Width"</li>
                    <li>Publish the page</li>
                </ol>
                <p><em>Note: Not all themes support custom page templates. If you don't see this option, just use the shortcode method instead.</em></p>

                <h3>Support</h3>
                <p>For questions or support, visit <a href="{{AUTHOR_URI}}" target="_blank">{{AUTHOR_URI}}</a></p>
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
            .card h2 {
                margin-top: 0;
                font-size: 24px;
            }
            .card h3 {
                margin-top: 30px;
                font-size: 18px;
                color: #0073aa;
            }
            .card ul li {
                margin-bottom: 8px;
            }
        </style>
        <?php
    }

    private function is_portfolio_page() {
        global $post;

        if (is_page_template('{{PLUGIN_SLUG}}-fullwidth.php')) {
            return true;
        }

        if (is_a($post, 'WP_Post') && has_shortcode($post->post_content, '{{SHORTCODE_NAME}}')) {
            return true;
        }

        return false;
    }

    public function add_portfolio_metadata() {
        if (!$this->is_portfolio_page()) {
            return;
        }

        $site_url = '{{PLUGIN_URI}}';
        $profile_image = {{PREFIX}}_PLUGIN_URL . 'assets/images/image.png';
        $title = '{{SITE_TITLE}}';
        $description = '{{SITE_DESCRIPTION}}';

        ?>
        <!-- SEO Meta Tags -->
        <meta name="description" content="<?php echo esc_attr($description); ?>">
        <meta name="author" content="{{AUTHOR_NAME}}">

        <!-- Open Graph Meta Tags -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="<?php echo esc_url($site_url); ?>">
        <meta property="og:title" content="<?php echo esc_attr($title); ?>">
        <meta property="og:description" content="<?php echo esc_attr($description); ?>">
        <meta property="og:image" content="<?php echo esc_url($profile_image); ?>">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:site_name" content="{{AUTHOR_NAME}}">

        <!-- Twitter Card Meta Tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:url" content="<?php echo esc_url($site_url); ?>">
        <meta name="twitter:title" content="<?php echo esc_attr($title); ?>">
        <meta name="twitter:description" content="<?php echo esc_attr($description); ?>">
        <meta name="twitter:image" content="<?php echo esc_url($profile_image); ?>">

        <!-- Additional Meta Tags -->
        <meta name="robots" content="index, follow">
        <meta name="theme-color" content="#1a1a2e">
        <link rel="canonical" href="<?php echo esc_url($site_url); ?>">
        <?php
    }

    public function add_portfolio_favicon() {
        if (!$this->is_portfolio_page()) {
            return;
        }

        $favicon_url = {{PREFIX}}_PLUGIN_URL . 'assets/images/favcon-transparent.png';
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
            'title' => '{{SITE_TITLE}}'
        );
    }
}

{{PREFIX}}_Plugin::get_instance();
