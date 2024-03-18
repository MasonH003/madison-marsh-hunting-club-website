const Button = ({label}) => {
    return (
      <button 
          className="
          text-navy-sucks text-2xl py-2 px-4 rounded-lg hover:text-[#5e7aeb] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
          {label}
      </button>
    )
  }
  
  export default Button