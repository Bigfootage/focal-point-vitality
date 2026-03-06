#!/bin/bash

set -e

echo "======================================"
echo "Building {{PLUGIN_NAME}} WordPress Plugin"
echo "======================================"
echo ""

echo "Step 1: Running Vite build..."
npm run build

echo ""
echo "Step 2: Auto-detecting and copying images..."
mkdir -p wordpress-plugin/{{PLUGIN_SLUG}}/assets/images

# Auto-detect all image files in public directory
image_count=0
if [ -d "public" ]; then
    for file in public/*.{png,jpg,jpeg,svg,gif,webp,ico} 2>/dev/null; do
        if [ -f "$file" ]; then
            cp "$file" wordpress-plugin/{{PLUGIN_SLUG}}/assets/images/
            echo "✓ Copied $(basename "$file")"
            ((image_count++))
        fi
    done
fi

if [ $image_count -eq 0 ]; then
    echo "⚠ Warning: No images found in public directory"
else
    echo "✓ Copied $image_count image(s)"
fi

echo ""
echo "Step 3: Verifying manifest.json..."
if [ -f "wordpress-plugin/{{PLUGIN_SLUG}}/assets/.vite/manifest.json" ]; then
    echo "✓ Manifest file found"
else
    echo "✗ ERROR: Manifest file not found!"
    exit 1
fi

echo ""
echo "Step 4: Creating plugin ZIP file..."
cd wordpress-plugin
rm -f {{PLUGIN_SLUG}}.zip
zip -r {{PLUGIN_SLUG}}.zip {{PLUGIN_SLUG}}/ -x "*.DS_Store"
cd ..

echo ""
echo "======================================"
echo "✓ Build Complete!"
echo "======================================"
echo ""
echo "WordPress plugin ready at:"
echo "  wordpress-plugin/{{PLUGIN_SLUG}}.zip"
echo ""
echo "Installation Instructions:"
echo "  1. Go to your WordPress admin panel"
echo "  2. Navigate to Plugins > Add New > Upload Plugin"
echo "  3. Upload {{PLUGIN_SLUG}}.zip"
echo "  4. Activate the plugin"
echo "  5. Use [{{SHORTCODE_NAME}}] shortcode or the full-width template"
echo ""
echo "For settings and help, go to Settings > {{PLUGIN_NAME}} after activation"
echo ""
