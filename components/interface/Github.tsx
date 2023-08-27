import React from "react";
import BxlGithub from "../icons/BxlGithub";
import LogosGithubIcon from "../icons/LogosGithubIcon";



const Github: React.FC = () => {
    return (
        <button className="group">
            <span className="group-hover:hidden">
                <BxlGithub />
            </span>
            <span className="hidden group-hover:block transition-colors">
                <LogosGithubIcon />
            </span>
        </button>
    )
}

export default Github;