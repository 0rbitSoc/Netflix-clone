import React from "react";

import BxlGoogle from "../icons/BxlGoogle";
import LogosGoogleIcon from "../icons/LogosGoogleIcon";

const Google: React.FC = () => {
    return (
        <button className="group">
            <span className="group-hover:hidden">
                <BxlGoogle />
            </span>
            <span className="hidden group-hover:block transition-colors">
                <LogosGoogleIcon />
            </span>
        </button>
    )
}

export default Google;