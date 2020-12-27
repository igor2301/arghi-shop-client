import React from 'react';

export class LendingPage extends React.Component {
    componentDidMount() {
        fetch('http://localhost:52027/api/home', { method: 'GET' })
            .then((res) => res.json())
            .then((res) => console.log(res));
    }

    render() {
        return <div>Hello!</div>;
    }
}
