
const Faq = () => {
  return (
    <div className = "bg-accent pl-20 pr-20 pb-4 pt-4">
        <div class="collapse bg-secondary text-MMHCCream hover:collapse-arrow">
          <input type="radio" name="my-accordion-1" checked="checked" /> 
          <div class="collapse-title text-xl font-medium">
            How do I become a member?
          </div>
          <div class="collapse-content"> 
            <p>Click the "Account" tab and create an account.</p>
          </div>
        </div>
        <div class="collapse bg-secondary text-MMHCCream hover:collapse-arrow">
          <input type="radio" name="my-accordion-1" /> 
          <div class="collapse-title text-xl font-medium">
            What do I do in case of an emergency?
          </div>
          <div class="collapse-content"> 
            <p>Click the red "Emergency" button on the top of the webpage</p>
          </div>
        </div>
        <div class="collapse bg-secondary text-MMHCCream hover:collapse-arrow">
          <input type="radio" name="my-accordion-1" /> 
          <div class="collapse-title text-xl font-medium">
            Am I allowed to hunt on the property?
          </div>
          <div class="collapse-content"> 
            <p>This club is currently invite only.</p>
          </div>
        </div>
    </div>
  )
}

export default Faq