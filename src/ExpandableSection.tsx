import React from "react"

function ExpandableSection({state, children, preview}: {state: number, children?:React.ReactNode, preview:React.ReactNode}){
    // State 1 renders the widget
    if (state==1){
        return(
            <>
                <div>
                    {preview}
                </div>
                <div className="hidden">
                    {children}
                </div>
            </>
        )
    }
    // State 2 renders the full article
    if (state==2){
        return(
            <>
                <div>
                    {preview}
                </div>
                <div>
                    {children}
                </div>
            </>
        )
    }
    // State zero hides
    return (
        <>
            <div className="hidden">
                {preview}
            </div>
            <div className="hidden">
                {children}
            </div>
        </>
    )
    
}

export default ExpandableSection