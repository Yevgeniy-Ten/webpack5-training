import "../src/styles/styles.scss"

const telegramLink = document.getElementById("tg-link")

const intervallyPrintText = (text, selector) => {
    selector.innerText = ""
    let indexLetter = 0
    let typedText = "" // чтобы знать что уже выведено, и постоянно не обращаться через selector.innerText
    const printLetter = () => {
        const isLastLetter = text.length === indexLetter
        if (isLastLetter) {
            selector.innerText = typedText
            const deleteLetter = () => {
                if (indexLetter <= 0) {
                    indexLetter = 0;
                    return printLetter(text)
                }
                setTimeout(() => {
                    indexLetter--
                    typedText = typedText.slice(0, indexLetter)
                    selector.innerText = typedText
                    deleteLetter()
                }, 60)
            }
            return deleteLetter()
        }
        setTimeout(() => {
            typedText += text[indexLetter]
            selector.innerText = typedText + "|"
            indexLetter++
            printLetter()
        }, Math.random() * 300)
    }
    printLetter()
}

intervallyPrintText("dev Yevgeniy, my telegram", telegramLink)