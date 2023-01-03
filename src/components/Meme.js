import React from "react"
import memeData from "../memeData"

export default function Meme() {
    // const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1g8my4.jpg")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memeData)
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }
    return (
        <main>
            <div className="form">
                <input
                    className="form-input"
                    type="text"
                    placeholder="Top Text"
                />
                <input
                    className="form-input"
                    type="text"
                    placeholder="Bottom Text"
                />
                <button
                    className="form-button"
                    onClick={getMemeImage}>
                    Get a new meme image !
                </button>
            </div>
            <img src={meme.randomImage} className='meme-image' />
        </main>
    )
}