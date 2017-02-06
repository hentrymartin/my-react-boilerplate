import React from 'react';
import Header from './Header';

/**
 * Artist page Component
 */
export default class HomePage extends React.Component {
    /**
     * render
     * @return {ReactElement} markup
     */
    render() {
        return (
            <div class="homepage-wrapper">
                <Header/>
            </div>
        );
    }
}
