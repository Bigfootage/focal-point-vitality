<?php
/**
 * Template Name: {{PLUGIN_NAME}} - Full Width
 * Description: Full-width template for {{PLUGIN_NAME}}
 */

if (!defined('ABSPATH')) {
    exit;
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class('{{PLUGIN_SLUG}}-fullwidth'); ?>>
    <div id="{{PLUGIN_SLUG}}-root"></div>
    <?php wp_footer(); ?>
</body>
</html>
