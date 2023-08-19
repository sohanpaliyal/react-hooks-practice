import React from 'react'

export default function StateAndEffect() {


    const [resourceType, setResourceType] = React.useState('posts');
    const [data, setData] = React.useState([])
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)


    React.useEffect(() => {
        console.log('resource changed ==>');


        return () => {
            console.log('return from resource changed');
        }
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [resourceType])

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);

        // to remove this eventListener
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])




    return (
        <div>
            <div>
                window width :- {windowWidth}
            </div>

            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>

            <h1>
                {resourceType}
            </h1>

            {
                data.map((el, i) => {
                    return <pre key={i}>
                        {JSON.stringify(el)}
                    </pre>
                })
            }
        </div>
    )
}
