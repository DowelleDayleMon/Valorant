import Controller from '../assets/icon/roles/Controller.webp'
import Initiator from '../assets/icon/roles/Initiator.webp'
import Sentinel from '../assets/icon/roles/Sentinel.webp'
import Duelist from '../assets/icon/roles/Duelist.webp'

import AstraIcon from '../assets/agents/Astra/Astra_icon.webp';
import CloveIcon from '../assets/agents/Clove/Clove_icon.webp';
import HarborIcon from '../assets/agents/Harbor/Harbor_icon.webp';
import OmenIcon from '../assets/agents/Omen/Omen_icon.webp';
import ViperIcon from '../assets/agents/Viper/Viper_icon.webp';

import BrimstoneMain from '../assets/agents/Brimstone/Brimstone_main.webp';
import FirstSkill from '../assets/agents/Brimstone/FirstSkill.webp';
import SecondSkill from '../assets/agents/Brimstone/SecondSkill.webp';
import ThirdSkill from '../assets/agents/Brimstone/ThirdSkill.webp';
import FourthSkill from '../assets/agents/Brimstone/FourthSkill.webp';

import AstraMain from '../assets/agents/Astra/Astra_main.webp';
import AstraGravityWell from '../assets/agents/Astra/AstraGravityWell.webp'; 
import AstraNovaPulse from '../assets/agents/Astra/AstraNovaPulse.webp'; 
import AstraNebula from '../assets/agents/Astra/AstraNebula.webp'; 
import AstraAstralForm from '../assets/agents/Astra/AstraAstralForm.webp'; 

import BreachMain from '../assets/agents/Breach/Breach_main.webp';
import BreachFlashpoint from '../assets/agents/Breach/BreachFlashpoint.webp'; 
import BreachAftershock from '../assets/agents/Breach/BreachAftershock.webp'; 
import BreachFaultLine from '../assets/agents/Breach/BreachFaultLine.webp'; 
import BreachRollingThunder from '../assets/agents/Breach/BreachRollingThunder.webp'; 

import ChamberMain from '../assets/agents/Chamber/Chamber_main.webp';
import ChamberTrademark from '../assets/agents/Chamber/ChamberTrademark.webp'; 
import ChamberHeadhunter from '../assets/agents/Chamber/ChamberHeadhunter.webp'; 
import ChamberRendezvous from '../assets/agents/Chamber/ChamberRendezvous.webp'; 
import ChamberTourdeforce from '../assets/agents/Chamber/ChamberTourdeforce.webp'; 

import CloveMain from '../assets/agents/Clove/Clove_main.webp';
import CloveMeddle from '../assets/agents/Clove/CloveMeddle.webp'; 
import CloveRuse from '../assets/agents/Clove/CloveRuse.webp'; 
import ClovePickmeup from '../assets/agents/Clove/ClovePickmeup.webp'; 
import CloveNotdeadyet from '../assets/agents/Clove/CloveNotdeadyet.webp'; 

const agentsData = {

    Astra: {
        Agent_name: "ASTRA",
        role: "Controller",
        role_icon: Controller,
        lore: "Harnessing the stars, Astra provides unparalleled control over the battlefield. Her celestial abilities enable her to shape the fight and assist her team brilliantly.",
        skills: [
            {
                name: "Gravity Well",
                description: "Create a Gravity Well that pulls enemies in, making them vulnerable. This ability disrupts enemy positioning and opens opportunities for follow-up attacks.",
                image: AstraGravityWell
            },
            {
                name: "Nova Pulse",
                description: "Deploy a Nova Pulse that concusses enemies within its radius, impairing their vision and hearing—ideal for creating openings for your team.",
                image: AstraNovaPulse
            },
            {
                name: "Nebula",
                description: "Transform into a Nebula, providing a smokescreen to obscure vision. It allows for strategic positioning and tactical plays without revealing your location.",
                image: AstraNebula
            },
            {
                name: "Astral Form",
                description: "Activate Astral Form to plan your next move. This ability lets you place stars and set them up for use when the time is right.",
                image: AstraAstralForm
            },
        ],
        suggested: [
            AstraIcon,
            CloveIcon,
            HarborIcon,
            OmenIcon,
            ViperIcon,
        ],
        mainImage: AstraMain,
    },

    Breach: {
        Agent_name: "BREACH",
        role: "Initiator",
        role_icon: Initiator,
        lore: "With raw power and relentless energy, Breach opens up the battlefield, disorienting foes and creating opportunities for his team to seize victory.",
        skills: [
            {
                name: "Flashpoint",
                description: "Send out a blinding flash that explodes after a short duration, blinding enemies caught in its line of sight. Perfect for initiating fights.",
                image: BreachFlashpoint
            },
            {
                name: "Aftershock",
                description: "Release a charge that travels through walls, damaging enemies in its path. This ability is great for clearing out tight spaces and forcing enemies out.",
                image: BreachAftershock
            },
            {
                name: "Fault Line",
                description: "Send a wave of energy that concusses and disorients enemies in its area. Use it to disrupt enemy positions and facilitate team pushes.",
                image: BreachFaultLine
            },
            {
                name: "Rolling Thunder",
                description: "Unleash a powerful seismic blast that displaces and damages enemies. This ultimate ability allows Breach to control the tempo of the game.",
                image: BreachRollingThunder
            },
        ],
        suggested: [
            AstraIcon,
            CloveIcon,
            HarborIcon,
            OmenIcon,
            ViperIcon,
        ],
        mainImage: BreachMain,
    },

    
    Brimstone: {
        Agent_name: "BRIMSTONE",
        role: "Controller",
        role_icon: Controller,
        lore: "Joining the fight with military precision, Brimstone brings unmatched firepower and utility. His arsenal of smokes, incendiary, and devastating Orbital Strike lets him guide his team to victory.",
        skills: [
            {
                name: "Stim Beacon",
                description: "a Deploy a Stim Beacon to grant RapidFire to allies in its range, boosting firing speed and combat effectiveness for a stronger offensive advantage on the battlefield.",
                image: FirstSkill
            },
            {
                name: "Incendiary",
                description: "b Launch an Incendiary grenade that creates a field of fire, dealing damage over time to enemies within, useful for blocking and controlling key areas strategically.",
                image: SecondSkill
            },
            {
                name: "Smoke Cloud",
                description: "c Place smoke clouds at chosen locations on a tactical map to block vision, enabling strategic moves and safe approaches across the battlefield without revealing positions.",
                image: ThirdSkill
            },
            {
                name: "Orbital Strike",
                description: "d Place smoke clouds at chosen locations on a tactical map to block vision, enabling strategic moves and safe approaches across the battlefield without revealing positions.",
                image: FourthSkill
            }
        ],
        suggested: [
            AstraIcon,
            CloveIcon,
            HarborIcon,
            OmenIcon,
            ViperIcon,
        ],
        mainImage: BrimstoneMain,
    },

    Chamber: {
        Agent_name: "CHAMBER",
        role: "Sentinel",
        role_icon: Sentinel,
        lore: "Equipped with precision and style, Chamber brings both firepower and finesse to the team. His abilities to deploy traps and a personal arsenal make him a reliable defender and a tactical threat.",
        skills: [
            {
                name: "Trademark",
                description: "Place a trap that scans for enemies. When triggered, it slows nearby players, disrupting enemy advances and buying time for strategic positioning.",
                image: ChamberTrademark
            },
            {
                name: "Headhunter",
                description: "Utilize a powerful sidearm, accurate at any range. Perfect for quick, precise shots that can eliminate threats before they reach your team.",
                image: ChamberHeadhunter
            },
            {
                name: "Rendezvous",
                description: "Deploy two teleport anchors. Activate to instantly reposition between them, allowing you to hold risky angles or escape dangerous encounters.",
                image: ChamberRendezvous
            },
            {
                name: "Tour de Force",
                description: "Bring out a custom sniper rifle that kills with a single, precise shot. A lethal weapon that also creates slowing fields, controlling enemy movement after each takedown.",
                image: ChamberTourdeforce
            }
        ],
        suggested: [
            AstraIcon,
            CloveIcon,
            HarborIcon,
            OmenIcon,
            ViperIcon,
        ],
        mainImage: ChamberMain,
    },
    Clove: {
        Agent_name: "CLOVE",
        role: "CONTROLLER",
        role_icon: Initiator,
        lore: "Scottish troublemaker Clove makes mischief for enemies in both the heat of combat and the cold of death. The young immortal keeps foes guessing, even from beyond the grave, their return to the living only ever a moment away.",
        skills: [
            {
                name: "Thorn Spire",
                description: "Summon a thorny spike that damages and reveals enemies in its path. An ideal tool for breaking defensive setups or denying areas to opponents.",
                image: CloveMeddle
            },
            {
                name: "Verdant Veil",
                description: "Deploy a nature-based barrier that obstructs vision while emitting a faint, disorienting pollen. Useful for creating opportunities and repositioning.",
                image: CloveRuse
            },
            {
                name: "Wild Roots",
                description: "Release entangling roots that seek and snare enemies within range. This ability immobilizes enemies, setting up easy follow-ups for your team.",
                image: ClovePickmeup
            },
            {
                name: "Overgrowth",
                description: "Harness Overgrowth to enhance your senses, detecting footsteps and movements in nearby areas. Grants the team a strategic edge by pinpointing enemy locations.",
                image: CloveNotdeadyet
            }
        ],
        suggested: [
            AstraIcon,
            CloveIcon,
            HarborIcon,
            OmenIcon,
            ViperIcon,
        ],
        mainImage: CloveMain,
    }
    
    
};

export default agentsData;
