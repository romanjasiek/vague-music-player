import { v4 as uuidv4 } from 'uuid';
import SleepyFish from './music/sleepy-fish_rest-until-dark/sleepy-fish_rest-until-dark.mp3';
import SleepyFishCover from './music/sleepy-fish_rest-until-dark/sleepy-fish_rest-until-dark.jpg';
import Nightdrive from './music/ak_nightdrive/night-drive-ak-main-version-04-09-1328.mp3';
import NightdriveCover from './music/ak_nightdrive/AK_Avatar_3032648670472391.jpg';
import ClearSky from './music/hartzmann_clearsky/clear-sky-hartzmann-main-version-02-20-18592.mp3';
import ClearSkyCover from './music/hartzmann_clearsky/Hartzmann_Avatar_6691536139022807.jpg';
import BigDreams from './music/simon-folwar_big-dreams/big-dreams-simon-folwar-main-version-02-25-18020.mp3';
import BigDreamsCover from './music/simon-folwar_big-dreams/simon-folwar-avatar-v1_2079212815531580.jpg';
import Babel from './music/zayner-babel/babel-zayner-main-version-04-00-2158.mp3';
import BabelCover from './music/zayner-babel/zayner-avatar-v1_4284495953502456.jpg';
import AdventureIsCalling from './music/vens-adams_adventure-is-calling/adventure-is-calling-vens-adams-main-version-02-02-31.mp3';
import AdventureIsCallingCover from './music/vens-adams_adventure-is-calling/vens-adams-avatar-v1_1721782353768003.jpg';
import Seascape from './music/mazko-seascape/mazko-seascape.mp3';
import SeascapeCover from './music/mazko-seascape/mazko-seascape.jpg';
import Daydream from './music/aiguille/aiguille-daydream.mp3';
import Nightfall from './music/aiguille/aiguille-nightfall.mp3';
import DaydreamCover from './music/aiguille/aiguille-daydream.jpg';
import KeepGoing from './music/sworn/sworn_keep-going.mp3';
import Reflection from './music/sworn/sworn_reflection.mp3';
import SwornCover from './music/sworn/sworn.jpg';
import Wayfare from './music/the-kount_mazko/the-kount_mazko_wayfare.mp3';
import WayfareCover from './music/the-kount_mazko/the-kount_mazko_wayfare.jpg';
import NewHorizon from './music/nymano_epektase/nymano_epektase_new-horizon.mp3';
import NewHorizonCover from './music/nymano_epektase/nymano_epektase_new-horizon.jpg';
import TodayFeelsLikeEveryday from './music/mama-aiuto/mama-aiuto_today-feels-like-everyday.mp3';
import TodayFeelsLikeEverydayCover from './music/mama-aiuto/mama-aiuto-today-feels-like-everyday.jpg';
import VHSTapes from './music/edapollo_sundreamer/edapollo_sundreamer-vhs-tapes-1993-1996.mp3';
import VHSTapesCover from './music/edapollo_sundreamer/edapollo_sundreamer-vhs-tapes-1993-1996.jpg';
import OceanView from './music/g-mills_kyle-mcevoy_lukeotwell/g-mills_kyle-mcevoy_lukeotwell-ocean-view.mp3';
import OceanViewCover from './music/g-mills_kyle-mcevoy_lukeotwell/g-mills_kyle-mcevoy_lukeotwell-ocean-view.jpg';
import UnderTheCityStars from './music/aso_middle-school_aviino/aso_middle-school_aviino_under-the-city-stars.mp3';
import UnderTheCityStarsCover from './music/aso_middle-school_aviino/aso_middle-school_aviino_under-the-city-stars.jpg';
import Conflicted from './music/hanz/hanz_conflicted.mp3';
import ConflictedCover from './music/hanz/hanz_conflicted.jpg';
import WhereTheSunGoes from './music/delayde/delayde_anybodyy-where_the_sun_goes.mp3';
import WhereTheSunGoesCover from './music/delayde/delayde_anybodyy-where_the_sun_goes.jpg';
import PrairieTone from './music/yeti-music/yeti-music_prairie-tone.mp3';
import PrairieToneCover from './music/yeti-music/yeti-music_prairie-tone.jpg';

function mixTape() {
    return [
        {
            name: "Rest Until Dark",
            cover: SleepyFishCover,
            artist: "Sleepy Fish",
            credits: "Credits: Sleepy Fish - Rest Until Dark",
            link: "https://chll.to/4280d68a",
            audio: SleepyFish,
            color: ['#F1E2C6','#39A1BC'],
            id: uuidv4(),
            active: true
        },
        {
            name: "Nightdrive",
            cover: NightdriveCover,
            artist: "AK",
            credits: "Credits: Music from Uppbeat (free for Creators!). License code: FFEZZKHNHD1PSTEI",
            link: "https://uppbeat.io/t/ak/night-drive",
            audio: Nightdrive,
            color: ['#A0988F','#5D6862'],
            id: uuidv4(),
            active: false
        },
        {
            name: "Seascape",
            cover: SeascapeCover,
            artist: "Makzo",
            credits: "Credits: Makzo - Seascape",
            link: "https://chll.to/385f1eec",
            audio: Seascape,
            color: ['#6072AD','#E9866E'],
            id: uuidv4(),
            active: false
        },
        {
            name: "Babel",
            cover: BabelCover,
            artist: "Zayner",
            credits: "Credits: Music from Uppbeat (free for Creators!). License code: 9JNPQK6KHA733TRS",
            link: "https://uppbeat.io/t/zayner/babel",
            audio: Babel,
            color: ['#6072AD','#EEB99F'],
            id: uuidv4(),
            active: false
        },
        {
            name: "Clear Sky",
            cover: ClearSkyCover,
            artist: "Hartzmann",
            credits: "Credits: Music from Uppbeat (free for Creators!). License code: 2D8RFKI6HJIKVU8E",
            link: "https://uppbeat.io/t/hartzmann/clear-sky",
            audio: ClearSky,
            color: ['#FB269F','#3B23A3'],
            id: uuidv4(),
            active: false
        },
        {
            name: "Daydream",
            cover: DaydreamCover,
            artist: "Aiguille",
            credits: "Credits: Aiguille - Daydream",
            link: "https://chll.to/4936a39e",
            audio: Daydream,
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Big Dreams",
            cover: BigDreamsCover,
            artist: "Simon Folwar",
            credits: "Credits: Music from Uppbeat (free for Creators!). License code: J9CJXAWJXXF5VSMW",
            link: "https://uppbeat.io/t/simon-folwar/big-dreams",
            audio: BigDreams,
            color: ['#3E7D80','#E47663'],
            id: uuidv4(),
            active: false
        },
        {
            name: "Keep Going",
            cover: SwornCover,
            artist: "Swørn",
            credits: "Credits: Swørn - Keep Going",
            link: "https://chll.to/ba41907d",
            audio: KeepGoing,
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Wayfare",
            cover: WayfareCover,
            artist: "The Kount, Makzo",
            credits: "Credits: The Kount, Makzo - Wayfare",
            link: "https://chll.to/1f3cc780",
            audio: Wayfare,
            color: ['#ECC1B3','#B8BD34'],
            id: uuidv4(),
            active: false
        },
        {
            name: "New Horizon",
            cover: NewHorizonCover,
            artist: "Nymano, Epektase",
            credits: "Credits: Nymano - New Horizons",
            link: "https://chll.to/33999df0",
            audio: NewHorizon,
            color: ['#866A8D','#191514'],
            id: uuidv4(),
            active: false
        },
        {
            name: "Today Feels Like Everyday",
            cover: TodayFeelsLikeEverydayCover,
            artist: "Mama Aiuto",
            credits: "Credits: Mama Aiuto - Today Feels Like Everyday",
            link: "https://chll.to/6e187463",
            audio: TodayFeelsLikeEveryday,
            color: ['#203E3F','#3B0C0E'],
            id: uuidv4(),
            active: false
        },
        {
            name: "vhs tapes 1993-1996",
            cover: VHSTapesCover,
            artist: "edapollo, Sundreamer",
            credits: "Credits: edapollo, Sundreamer - vhs tapes 1993-1996",
            link: "https://chll.to/2ac798fd",
            audio: VHSTapes,
            color: ['#FAB47C','#B85031'],
            id: uuidv4(),
            active: false
        },
        {
            name: "Ocean View",
            cover: OceanViewCover,
            artist: "G Mills, Kyle McEvoy, Luke Otwell",
            credits: "Credits: G Mills, Kyle McEvoy, Luke Otwell - Ocean View",
            link: "https://chll.to/e6017a17",
            audio: OceanView,
            color: ['#DFC4D3','#123666'],
            id: uuidv4(),
            active: false
        },
        {
            name: "Reflection",
            cover: SwornCover,
            artist: "Swørn",
            credits: "Credits: Swørn - Reflection",
            link: "https://chll.to/38dc7ff2",
            audio: Reflection,
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Under the City Stars",
            cover: UnderTheCityStarsCover,
            artist: "Aso, Middle School, Aviino",
            credits: "Credits: Aso, Middle School, Aviino - Under the City Stars",
            link: "https://chll.to/bf3c2e2e",
            audio: UnderTheCityStars,
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Nightfall",
            cover: DaydreamCover,
            artist: "Aiguille",
            credits: "Credits: Aiguille - Nightfall",
            link: "https://chll.to/cbab4c11",
            audio: Nightfall,
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Adventure Is Calling",
            cover: AdventureIsCallingCover,
            artist: "Vens Adams",
            credits: "Credits: Music from Uppbeat (free for Creators!). License code: FFEZZKHNHD1PSTEI",
            link: "https://uppbeat.io/t/vens-adams/adventure-is-calling",
            audio: AdventureIsCalling,
            color: ['#FEF6DF','#9CB4D6'],
            id: uuidv4(),
            active: false
        },
        {
            name: "Conflicted",
            cover: ConflictedCover,
            artist: "Hanz",
            credits: "Hanz - Conflicted",
            link: "https://chll.to/840d86cf",
            audio: Conflicted,
            color: ['#475671','#CE838B'],
            id: uuidv4(),
            active: false
        },
        {
            name: "Where The Sun Goes",
            cover: WhereTheSunGoesCover,
            artist: "Delayde, anybodyy",
            credits: "Delayde, anybodyy - Where The Sun Goes",
            link: "https://chll.to/a710a02f",
            audio: WhereTheSunGoes,
            color: ['#6B37C4','#99D587'],
            id: uuidv4(),
            active: false
        },
        {
            name: "Prairie Tone",
            cover: PrairieToneCover,
            artist: "Yeti Music",
            credits: "Credits: Music from Uppbeat (free for Creators!). License code: SPTXPMV1CVOXWTIP",
            link: "https://uppbeat.io/t/yeti-music/prairie-tone",
            audio: PrairieTone,
            color: ['#452D35','#648DAE'],
            id: uuidv4(),
            active: false
        }
    ]
}

export default mixTape;