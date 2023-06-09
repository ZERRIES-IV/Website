import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "./src/global.scss";`, // Path to your global Sass file
      },
    },
  },
})
