import { v4 as uuidv4 } from 'uuid'

function chillHop() {
    return [
        {
            name: "Rest Until Dark",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
            artist: "Sleepy Fish",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10015",
            color: ['#F1E2C6','#39A1BC'],
            id: uuidv4(),
            active: true
        },
        {
            name: "Seascape",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
            artist: "Makzo",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11773",
            color: ['#6072AD','#E9866E'],
            id: uuidv4(),
            active: false
        },
        {
            name: "Wayfare",
            cover: "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
            artist: "The Kount, Makzo",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=20125",
            color: ['#ECC1B3','#B8BD34'],
            id: uuidv4(),
            active: false
        },
        {
            name: "New Horizons",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
            artist: "Nymano, Epektase",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10142",
            color: ['#866A8D','#191514'],
            id: uuidv4(),
            active: false
        }
    ]
}

export default chillHop;