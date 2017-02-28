import * as React from 'react';

export default function Layout({children} : any) {
    return (
        <div>
            <h1>Say, Hello</h1>
            {children}
        </div>
    );
}