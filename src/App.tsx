import type { Component } from 'solid-js'

import logo from './lib/logo.svg'

const App: Component = () => {
  return (
    <div class="text-center">
      <header class="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-[calc(10px+2vmin)] text-white gap-8">
        <img
          src={logo}
          alt="logo"
          class="animate-spin-slow h-[40vmin] pointer-events-none"
        />
        <p>
          Edit <code class="font-mono">src/App.tsx</code> and save to reload.
        </p>
        <a
          class="text-purple-500"
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  )
}

export default App
