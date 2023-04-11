import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="mt-12">
                <div className='border rounded-lg p-4 bg-indigo-200'>
                    <h1 className="my-3 font-bold text-slate-600">When should you use context api?</h1>
                    <p className="text-sm">React Context is a way for a child component to access a value in a parent component.
                    React Context solves the problem of props drilling. It allows you to share props or state with an indirect child or parent.
                    </p>
                </div>
                <div className='border rounded-lg p-4 bg-indigo-200 mt-5'>
                    <h1 className="my-3 font-bold text-slate-600">What is custom hook?</h1>
                    <p className="text-sm">Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app.
                    </p>
                </div>
                <div className='border rounded-lg p-4 bg-indigo-200 mt-5'>
                    <h1 className="my-3 font-bold text-slate-600">What is useRef?</h1>
                    <p className="text-sm">The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
                    </p>
                </div>
                <div className='border rounded-lg p-4 bg-indigo-200 mt-5'>
                    <h1 className="my-3 font-bold text-slate-600">What is useMemo?</h1>
                    <p className="text-sm"><code>useMemo(() =&gt; computation(a, b), [a, b])</code> is the hook that lets you memoize expensive computations. Given the same [a, b] dependencies, once memoized, the hook is going to return the memoized value without invoking computation(a, b).
                    </p>
                </div>
               
            </div>
        </div>
    );
};

export default Blog;