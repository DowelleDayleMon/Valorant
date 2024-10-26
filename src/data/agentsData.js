import BrimstoneMain from '../assets/agents/Brimstone/Brimstone_main.webp';
// import BrimstoneIcon from '../assets/Agents/Brimstone/Brimstone_icon.webp';
import FirstSkill from '../assets/agents/Brimstone/FirstSkill.webp';
import SecondSkill from '../assets/agents/Brimstone/SecondSkill.webp';
import ThirdSkill from '../assets/agents/Brimstone/ThirdSkill.webp';
import FourthSkill from '../assets/agents/Brimstone/FourthSkill.webp';
import AstraIcon from '../assets/agents/Astra/Astra_icon.webp';
import CloveIcon from '../assets/agents/Clove/Clove_icon.webp';
import HarborIcon from '../assets/agents/Harbor/Harbor_icon.webp';
import OmenIcon from '../assets/agents/Omen/Omen_icon.webp';
import ViperIcon from '../assets/agents/Viper/Viper_icon.webp';
import BreachIcon from '../assets/agents/Breach/Breach_icon.webp';
import AstraMain from '../assets/agents/Astra/Astra_main.webp';
import BreachMain from '../assets/agents/Breach/Breach_main.webp';
import AstraGravityWell from '../assets/agents/Astra/AstraGravityWell.webp'; // Example path
import AstraNovaPulse from '../assets/agents/Astra/AstraNovaPulse.webp'; // Example path
import AstraNebula from '../assets/agents/Astra/AstraNebula.webp'; // Example path
import AstraAstralForm from '../assets/agents/Astra/AstraAstralForm.webp'; // Example path
import BreachFlashpoint from '../assets/agents/Breach/BreachFlashpoint.webp'; // Example path
import BreachAftershock from '../assets/agents/Breach/BreachAftershock.webp'; // Example path
import BreachFaultLine from '../assets/agents/Breach/BreachFaultLine.webp'; // Example path
import BreachRollingThunder from '../assets/agents/Breach/BreachRollingThunder.webp'; // Example path
import Controller from '../assets/icon/roles/Controller.webp'

const agentsData = {

    
    Brimstone: {
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
};

export default agentsData;
