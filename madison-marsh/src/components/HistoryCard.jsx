
// NOTE: This doesnt work for some reason that is beyond me. Didnt have the time to figure it out

const HistoryCard = ({imgleft, src, altText, width, height, color, textColor, text, title}) => {
    if( imgleft ) {
        return (
            <div class="join rounded-none left-0">
            <img
                src = {src}
                alt = {altText}
                className = {`w-4/12 h-${height} object-cover join-item`}
            />

            <TextSquare 
                width={width} 
                height={height} 
                color={color} 
                textColor={textColor} 
                text={text}
                title={title}/>
        </div>
    ) } 
    else {
        return (
            <div class="join rounded-none left-0">
    
            <TextSquare 
                width={width} 
                height={height} 
                color={color} 
                textColor={textColor} 
                text={text}
                title={title}
            />

            <img
                src = {src}
                alt = {altText}
                className = {`w-4/12 h-${height} object-cover join-item`}
            />
          </div>
        )
    }
}

export default HistoryCard;