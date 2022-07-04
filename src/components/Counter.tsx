import { createSignal } from 'solid-js'

export default function Counter() {
  const [count, setCount] = createSignal(0)

  const onClick = (v: number) => () => setCount(p => p + v)

  return (
    <div>
      <div class="flex justify-around p-6 items-center text-5xl gap-4">
        <button
          onClick={onClick(-1)}
          class="rounded px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800"
        >
          -
        </button>
        <span class="w-10">{count()}</span>
        <button
          onClick={onClick(1)}
          class="rounded px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800"
        >
          +
        </button>
      </div>
    </div>
  )
}
