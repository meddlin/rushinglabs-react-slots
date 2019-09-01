## React Slots Pattern

A basic example of how to use the "slots" pattern for passing React components (and JSX) via props. This type of pattern can help to write modular components for increased code re-use.

Created with [create-react-app](https://github.com/facebook/create-react-app).

<hr />

*This repo was create to supplement a video for my [RushingLabs](https://www.youtube.com/channel/UCMbD6urmMQBUUxjjvyXgaxw) Youtube channel.*

[<img src="https://meddlin-web.s3.us-east-2.amazonaws.com/video-thumbnails/1567364675166.jpg" width="720" height="405">](https://youtu.be/Nx7KZb1R_yE)

[https://youtu.be/Nx7KZb1R_yE](https://youtu.be/Nx7KZb1R_yE)

<hr />

### Explanation

In the `App` component we create an instance of `<Layout />` in JSX, just as traditionally done, and declare a few props: `header`, `content`, and `sidebar`.

Only instead of supply data to these props *we are able to supply JSX directly inside of them*.

This allows us to pass any component we wish. Building a "layout" for a website is only one simple use-case for this pattern.

```js
import Layout from './layout/Layout';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Body from './components/body/Body';

function App() {
  return (
    <div className="App">
      <Layout header={<Header />} content={<Body />} sidebar={<Sidebar />} />
    </div>
  );
}
```

Inside the `Layout` component, since it's already an instantiated React component, we can simply render the prop values in `{ }` just like any other JavaScript.

*Note: It's highly suggested to include some type of null- or type-checking if possible in your own implementation.*

```js
const Layout = ({ header, sidebar, content }) => {
    return (
        <div>

            {header}

            <div className={styles.layoutStuff}>
                <div className={styles.bodyContainer}>

                    {content}

                </div>
                <div className={styles.sideContainer}>

                    {sidebar} 
                    
                </div>
            </div>
        </div>
    );
};
```