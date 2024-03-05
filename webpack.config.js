const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    mode: 'production',

    entry: {
        main: path.resolve(__dirname, 'src/js/index.js'),
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: '[name][contenthash].[ext]',
        clean: true
    },

    module: {
        rules: [{
                test: /.s?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },

            {
                test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/,
                type: 'asset/resource',
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ],
    },

    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new CssMinimizerPlugin(),
        ],
        minimize: true,
    },

    devtool: 'inline-source-map',

    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 5001,
        open: true,
        hot: true,
    },

    performance: {
        hints: false
    },

    plugins: [
        new MiniCssExtractPlugin(),

        new FaviconsWebpackPlugin({
            logo: './src/images/logo.png',
            mode: 'webapp',
            manifest: './src/manifest.json'
        }),

        new HtmlWebpackPlugin({
            title: 'Forwwward Studio - Digital Product Studio',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),
            scriptLoading: 'defer',
            meta: {
                'author': {
                    name: 'author',
                    content: 'Adnan Musinovic'
                },
                'description': {
                    name: 'description',
                    content: 'We partner with tech companies & startups to craft remarkable products and brands that impact and inspire.'
                },
                'keyword': {
                    name: 'keywords',
                    content: 'Forwwward Studio, Web Design, Web Development, Marketing'
                },
                'og:title': {
                    property: 'og:title',
                    content: 'Forwwward Studio - Digital Product Studio'
                },
                'og:description': {
                    property: 'og:description',
                    content: 'We partner with tech companies &amp; startups to craft remarkable products and brands that impact and inspire.'
                },
                'og:type': {
                    property: 'og:type',
                    content: 'website'
                },
                'og:url': {
                    property: 'og:url',
                    content: 'https://forwwwardstudios.000webhostapp.com/index.html'
                },
                'og:image': {
                    property: 'og:image',
                    content: 'public_html/src/images/facebook-share-img.png'
                },
                'twitter:card': {
                    name: 'twitter:card',
                    content: 'summary_large_image'
                },
                'twitter:title': {
                    name: 'twitter:title',
                    content: 'Forwwward Studio - Digital Product Studio'
                },
                'twitter:description': {
                    name: 'twitter:description',
                    content: 'We partner with tech companies &amp; startups to craft remarkable products and brands that impact and inspire.'
                },
                'twitter:image': {
                    name: 'twitter:image',
                    content: 'public_html/src/images/twitter-share-img.png'
                },
                'meta': {
                    name: 'theme-color',
                    content: '#191919'
                }
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Work - Forwwward Studio',
            filename: 'work.html',
            template: path.resolve(__dirname, 'src/work.html'),
            scriptLoading: 'defer',
            meta: {
                'author': {
                    name: 'author',
                    content: 'Adnan Musinovic'
                },
                'description': {
                    name: 'description',
                    content: 'We partner with tech companies & startups to craft remarkable products and brands that impact and inspire.'
                },
                'keyword': {
                    name: 'keywords',
                    content: 'Forwwward Studio, Web Design, Web Development, Marketing'
                },
                'og:title': {
                    property: 'og:title',
                    content: 'Work - Forwwward Studio'
                },
                'og:description': {
                    property: 'og:description',
                    content: 'We partner with tech companies &amp; startups to craft remarkable products and brands that impact and inspire.'
                },
                'og:type': {
                    property: 'og:type',
                    content: 'website'
                },
                'og:url': {
                    property: 'og:url',
                    content: 'https://forwwwardstudios.000webhostapp.com/work.html'
                },
                'og:image': {
                    property: 'og:image',
                    content: 'src/images/facebook-share-img.png'
                },
                'twitter:card': {
                    name: 'twitter:card',
                    content: 'summary_large_image'
                },
                'twitter:title': {
                    name: 'twitter:title',
                    content: 'Work - Forwwward Studio'
                },
                'twitter:description': {
                    name: 'twitter:description',
                    content: 'We partner with tech companies &amp; startups to craft remarkable products and brands that impact and inspire.'
                },
                'twitter:image': {
                    name: 'twitter:image',
                    content: 'src/images/twitter-share-img.png'
                },
                'meta': {
                    name: 'theme-color',
                    content: '#191919'
                }
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Studio - Forwwward Studio',
            filename: 'studio.html',
            template: path.resolve(__dirname, 'src/studio.html'),
            scriptLoading: 'defer',
            meta: {
                'author': {
                    name: 'author',
                    content: 'Adnan Musinovic'
                },
                'description': {
                    name: 'description',
                    content: 'We partner with tech companies & startups to craft remarkable products and brands that impact and inspire.'
                },
                'keyword': {
                    name: 'keywords',
                    content: 'Forwwward Studio, Web Design, Web Development, Marketing'
                },
                'og:title': {
                    property: 'og:title',
                    content: 'Studio - Forwwward Studio'
                },
                'og:description': {
                    property: 'og:description',
                    content: 'We partner with tech companies &amp; startups to craft remarkable products and brands that impact and inspire.'
                },
                'og:type': {
                    property: 'og:type',
                    content: 'website'
                },
                'og:url': {
                    property: 'og:url',
                    content: 'https://forwwwardstudios.000webhostapp.com/studio.html'
                },
                'og:image': {
                    property: 'og:image',
                    content: 'src/images/facebook-share-img.png'
                },
                'twitter:card': {
                    name: 'twitter:card',
                    content: 'summary_large_image'
                },
                'twitter:title': {
                    name: 'twitter:title',
                    content: 'Studio - Forwwward Studio'
                },
                'twitter:description': {
                    name: 'twitter:description',
                    content: 'We partner with tech companies &amp; startups to craft remarkable products and brands that impact and inspire.'
                },
                'twitter:image': {
                    name: 'twitter:image',
                    content: 'src/images/twitter-share-img.png'
                },
                'meta': {
                    name: 'theme-color',
                    content: '#191919'
                }
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Contact - Forwwward Studio',
            filename: 'contact.html',
            template: path.resolve(__dirname, 'src/contact.html'),
            scriptLoading: 'defer',
            meta: {
                'author': {
                    name: 'author',
                    content: 'Adnan Musinovic'
                },
                'description': {
                    name: 'description',
                    content: 'We partner with tech companies & startups to craft remarkable products and brands that impact and inspire.'
                },
                'keyword': {
                    name: 'keywords',
                    content: 'Forwwward Studio, Web Design, Web Development, Marketing'
                },
                'og:title': {
                    property: 'og:title',
                    content: 'Contact - Forwwward Studio'
                },
                'og:description': {
                    property: 'og:description',
                    content: 'We partner with tech companies &amp; startups to craft remarkable products and brands that impact and inspire.'
                },
                'og:type': {
                    property: 'og:type',
                    content: 'website'
                },
                'og:url': {
                    property: 'og:url',
                    content: 'https://forwwwardstudios.000webhostapp.com/contact.html'
                },
                'og:image': {
                    property: 'og:image',
                    content: 'src/images/facebook-share-img.png'
                },
                'twitter:card': {
                    name: 'twitter:card',
                    content: 'summary_large_image'
                },
                'twitter:title': {
                    name: 'twitter:title',
                    content: 'Contact - Forwwward Studio'
                },
                'twitter:description': {
                    name: 'twitter:description',
                    content: 'We partner with tech companies &amp; startups to craft remarkable products and brands that impact and inspire.'
                },
                'twitter:image': {
                    name: 'twitter:image',
                    content: 'src/images/twitter-share-img.png'
                },
                'meta': {
                    name: 'theme-color',
                    content: '#191919'
                }
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Page not found - Forwwward Studio',
            filename: 'not-found.html',
            template: path.resolve(__dirname, 'src/not-found.html'),
            meta: {
                'meta': {
                    name: 'theme-color',
                    content: '#191919'
                }
            }
        })
    ]
}