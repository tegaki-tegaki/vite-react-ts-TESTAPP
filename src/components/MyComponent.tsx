import { useEffect } from "react"

type Props = {
  /**
   * the name of this component, it will be announced in the console log
   * on mount (when the component is created) and it also ends up in the rendered
   * DOM output! (as a <p> element)
   */
  name: string,
}
export const MyComponent = ({ name }: Props) => {
  useEffect(() => {
    console.log(`(${name})> Hello`)
    return () => {
      console.log(`(${name})> This is the end, I love you.`)
    }
  }, [])
  return <div className="underline">
    <p>Hello, I'm {name}, this is my component, I eat props, I ate the props</p>
  </div>
}
