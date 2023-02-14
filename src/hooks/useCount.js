import { storeToRefs } from 'pinia'
import { useHomeStore } from '../store/home'

export default function useCount() {
  const store = useHomeStore()
  const { count } = storeToRefs(store)
  const { increment, decrement } = store

  return {
    count,
    increment,
    decrement
  }
}
