import { Card } from '../components';

const ThreeCards = () => {
  return (
    <threecards>
        <div className = "bg-MMHCOlive p-5 flex flex-row place-content-around">
            <Card
                imageUrl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                altText="Club info"
                title="Club Information"
                description="Click here to access club information"
            />
            <Card
                imageUrl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                altText="Hunting Resources"
                title="Hunting Resources"
                description="Click here to access external hunting links"
            />
            <Card
                imageUrl="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                altText="History"
                title="History"
                description="Click here to read about the rich history of Dorcester County"
            />
        </div>
    </threecards>
  )
}

export default ThreeCards