import React from 'react'
import Repose from './Repose'

const ReposeList = ({repose}) => {
    return (
        <div>
            {
                //  the data nodes name as coming from API.
                repose.map((item, index) => {
                    return (
                        <Repose
                            name={repose[index].name}
                            key={index}
                            description={item.description}
                            starsCount={item.stargazers_count}
                            openIssuesCount={item.open_issues_count}
                            avatarUrl={item.owner ? item.owner.avatar_url : ""}
                            UserName={item.owner ? item.owner.login : "No name"}
                            submitTime={item.created_at}


                        />
                    )
                })
            }
        </div>
    )
}

export default ReposeList
