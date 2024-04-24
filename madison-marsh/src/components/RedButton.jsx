// NOTE: Deprecated

const RedButton = ({label, onClick}) => {
    return (
        <button onClick = {onClick} class="btn btn-error btn-outline flex flex-row border-2 text-MMHCRed border-MMHCRed bg-MMHCCream hover:text-MMHCCream hover:bg-MMHCLightRed">
            {label}
        </button>
    )
}

export default RedButton;