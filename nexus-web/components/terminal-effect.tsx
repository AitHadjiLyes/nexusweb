"use client"

import { useState, useEffect } from "react"

interface Command {
  text: string
  delay: number
}

interface TerminalEffectProps {
  commands: Command[]
}

export default function TerminalEffect({ commands }: TerminalEffectProps) {
  const [displayedCommands, setDisplayedCommands] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)

  // Handle typing effect
  useEffect(() => {
    if (currentIndex >= commands.length) return

    const command = commands[currentIndex]
    const textLength = command.text.length

    if (currentText.length < textLength) {
      const timeout = setTimeout(() => {
        setCurrentText(command.text.substring(0, currentText.length + 1))
      }, 50)

      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayedCommands([...displayedCommands, currentText])
        setCurrentText("")
        setCurrentIndex(currentIndex + 1)
      }, 500)

      return () => clearTimeout(timeout)
    }
  }, [commands, currentIndex, currentText, displayedCommands])

  // Handle command delays
  useEffect(() => {
    if (currentIndex === 0 || currentIndex >= commands.length) return

    const timeout = setTimeout(
      () => {
        // This is intentionally empty to create a delay between commands
      },
      commands[currentIndex - 1].delay,
    )

    return () => clearTimeout(timeout)
  }, [commands, currentIndex])

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-mono text-sm text-green-500">
      {displayedCommands.map((cmd, index) => (
        <div key={index} className="mb-2">
          {cmd}
        </div>
      ))}

      {currentIndex < commands.length && (
        <div>
          {currentText}
          <span
            className={`inline-block w-2 h-4 ml-1 bg-green-500 ${cursorVisible ? "opacity-100" : "opacity-0"}`}
          ></span>
        </div>
      )}
    </div>
  )
}
