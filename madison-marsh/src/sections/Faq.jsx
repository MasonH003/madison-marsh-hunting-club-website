
const Faq = () => {
  return (
    <div className = "bg-MMHCOlive pl-20 pr-20 pb-16">
      <h1 className = "flex justify-center p-4 text-4xl bg-MMHCOlive text-MMHCBrown">Frequently Asked Questions</h1>
        <div class="collapse bg-MMHCGreen text-MMHCCream collapse-arrow">
          <input type="radio" name="my-accordion-1" checked="checked" /> 
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content"> 
            <p>hello</p>
          </div>
        </div>
        <br></br>
        <div class="collapse bg-MMHCGreen text-MMHCCream collapse-arrow">
          <input type="radio" name="my-accordion-1" /> 
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content"> 
            <p>hello</p>
          </div>
        </div>
        <br></br>
        <div class="collapse bg-MMHCGreen text-MMHCCream collapse-arrow">
          <input type="radio" name="my-accordion-1" /> 
          <div class="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content"> 
            <p>hello</p>
          </div>
        </div>
    </div>
  )
}

export default Faq