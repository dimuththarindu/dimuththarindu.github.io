<script>
fetch('https://www.reddit.com/r/cats.json')
.then(res=>res.json())
.then(res=>res.data.children)
.then(res=>res.map(post=>({
  author: post.data.author,
  link: post.data.url,
  img: post.data.thumbnail,
  title: post.data.title
})))
.then(res=>res.map(render))
.then(res=>console.log(res))

const app = document.querySelector('#app');

const render = post => {
  const node = document.createElement('div');
  node.innerHTML = `
      <a href="${post.img}">
        <img src="${post.link}"/>
      </a>`;
  app.appendChild(node);
}
</script>