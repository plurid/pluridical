// #region imports
    // #region libraries
    import React, {
        useRef,
        useEffect,
    } from 'react';

    import ReactDOM from 'react-dom';

    import {
        PluridApplication,
    } from '@plurid/plurid-react';
    // #endregion libraries
// #endregion imports



// #region module
const injectPlurid = () => {
    const pageID = Math.random();

    const body = document.body;
    const wrapper = document.createElement('div');
    wrapper.className = `pluridical-wrapper-${pageID}`;

    // TODO
    // Handle the cloning taking care of events listeners and styles.
    wrapper.innerHTML = body.innerHTML;
    body.innerHTML = "";


    const rootId = `pluridical-root-${pageID}`;
    const root = document.createElement('div');
    root.id = rootId;
    document.body.appendChild(root);


    const iframeRendering = false;


    ReactDOM.render(
        <PluridApplication
            planes={[
                {
                    route: '/root',
                    component: {
                        kind: 'react',
                        element: () => {
                            const node = useRef<HTMLDivElement | null>(null);

                            useEffect(() => {
                                if (iframeRendering) {
                                    return;
                                }

                                if (!node.current) {
                                    return;
                                }

                                node.current.appendChild(wrapper);
                            }, []);


                            // TODO
                            // Default render as div wrapping
                            // give to the user the possibility of reloading the webpage
                            // in an iframe for better styles/functionality integration on non-standard pages.

                            if (iframeRendering) {
                                return (
                                    <iframe
                                        src={document.URL}
                                        style={{
                                            width: '100%',
                                            height: '900px',
                                            outline: 'none',
                                            border: 'none',
                                        }}
                                    />
                                )
                            }

                            return (
                                <div
                                    ref={node}
                                />
                            );
                        },
                    },
                },
            ]}
            view={[
                '/root',
            ]}
            configuration={{
                elements: {
                    plane: {
                        controls: {
                            show: false,
                        },
                    },
                },
            }}
        />,
        document.getElementById(rootId) as HTMLElement,
    );
}


const main = async () => {
    injectPlurid();
}


main();
// #endregion module
