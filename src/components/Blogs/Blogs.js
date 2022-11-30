import React from 'react';

const Blogs = () => {
    return (
        <div>
            <section className=" text-black my-12">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">

                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-bold text-xl"> What are the different ways to manage a state in a React application?</h3>
                            <p className="mt-1 text-black">Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of: <br />

                                1.Hooks <br />
                                2.React Context API <br />
                                3.Apollo Link State</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">How does prototypical inheritance work?</h3>
                            <p className="mt-1 text-black">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">What is a unit test? Why should we write unit tests?</h3>
                            <p className="mt-1 text-black">The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl"> React vs. Angular vs. Vue?</h3>
                            <p className="mt-1 text-black">There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.Each framework is component-based and allows the rapid creation of UI features.However, they all have a different structure and architecture — so first, we’ll look into their architectural differences to understand the philosophy behind them.

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

