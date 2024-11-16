import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build : {
    outDir: './docs' //build出力先
  },
  base: process.env.GITHUB_PAGES
    ? '/react-router-test/' // レポジトリ名を設定
    : './',
})
