import { rollup } from 'rollup'
import copy from 'rollup-plugin-copy'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import scss from 'rollup-plugin-scss'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import sass from 'node-sass'
import pkg from '../package.json'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const resolveRoot = file => path.resolve(__dirname, path.join('../', file))
const resolveSrc = file => resolveRoot(`src/${file}`)
const resolveDist = file => resolveRoot(`dist/${file}`)

const banner = `/*!
* ${pkg.name} ${pkg.version}
* (c) ${new Date().getFullYear()} ${pkg.author}
* @license MIT
*/`

/* 
scssCompiler => scss
tsCompiler => ts
copy => json、wxs、wxml
*/

/**
 * 编译scss文件
 * @param {*} dist
 */
function scssCompiler(dist) {
    // rollup({
    //     input: resolveSrc('index.scss'),
    //     output: {
    //         file: resolveDist('index.wxss'),
    //     },
    //     plugins: [scss()],
    // })
    sass({})
}

// scssCompiler()

// console.log('>>>', sass, resolveSrc('index.scss'), resolveDist('index.wxss'))

sass.render(
    {
        file: resolveSrc('index.scss'),
        outFile: resolveDist('index.wxss'),
    },
    e => {
        console.log('>>>', e)
    }
)
