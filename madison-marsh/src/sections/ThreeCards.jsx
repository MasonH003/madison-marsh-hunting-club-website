import { Card } from '../components';
import sika from '../assets/images/sika.jpg';
import group from '../assets/images/hunting-group.jpg';
import dorcester from '../assets/images/dorcester.jpg';

const ThreeCards = () => {
  return (
    <threecards>
        <div className = "bg-accent p-5 flex flex-row place-content-around">
            <Card
                imageUrl={group}
                altText="Club info"
                title="Club Information"
                description="Click here to access club information"
                href = "/ClubRules"
            />
            <Card
                imageUrl={sika}
                altText="Hunting Resources"
                title="Hunting Resources"
                description="Click here to access external hunting links"
                href = "/HuntingResources"
            />
            <Card
                imageUrl={dorcester}
                altText="History"
                title="History"
                description="Click here to read about the rich history of Dorcester County"
                href = "/History"
            />
        </div>
    </threecards>
  )
}

export default ThreeCards