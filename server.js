const path = require('path');

const express = require('express');

const app = express();

const posts = {
  '0': {
    'title': 'The first article!!!',
    'author': 'John Smith',
    'date': new Date(2017, 5, 1),
    'content': `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras
      tincidunt lobortis feugiat. Aliquam ultrices sagittis orci a scelerisque. Duis
      convallis convallis tellus id interdum. Ipsum dolor sit amet consectetur.
      Pretium lectus quam id leo in vitae. Viverra nam libero justo laoreet sit.
      Massa tincidunt nunc pulvinar sapien et ligula. Faucibus nisl tincidunt
      eget nullam non nisi est sit. Amet mattis vulputate enim nulla aliquet
      porttitor lacus luctus accumsan. Vitae ultricies leo integer malesuada nunc
      vel risus commodo.
    `,
  },

  '1': {
    'title': 'My personal opinion on the aerodynamics of a bagel',
    'author': 'John Smith',
    'date': new Date(2019, 6, 14),
    'content': `
      At in tellus integer feugiat scelerisque. Ac tincidunt vitae semper quis lectus
      nulla at. Massa ultricies mi quis hendrerit dolor magna eget est. A diam
      sollicitudin tempor id eu nisl nunc mi. Morbi non arcu risus quis varius.
      Maecenas sed enim ut sem viverra aliquet eget sit. Sed felis eget velit
      aliquet sagittis id consectetur. Ullamcorper eget nulla facilisi etiam
      dignissim diam quis. Iaculis eu non diam phasellus vestibulum lorem sed
      risus. At in tellus integer feugiat scelerisque varius morbi enim nunc.
    `,
  },

  '2': {
    'title': 'How I learned to stop currying and love procedrual programming',
    'author': 'Mary Sue',
    'date': new Date(2018, 10, 11),
    'content': `
      Id diam vel quam elementum. At ultrices mi tempus imperdiet nulla. Nisl nunc mi
      ipsum faucibus vitae aliquet nec ullamcorper. Quis ipsum suspendisse ultrices
      gravida dictum fusce ut. Suscipit adipiscing bibendum est ultricies. Amet
      nulla facilisi morbi tempus iaculis urna id volutpat lacus. At consectetur
      lorem donec massa sapien. Tristique sollicitudin nibh sit amet commodo
      nulla facilisi nullam. Vitae semper quis lectus nulla at volutpat diam ut
      venenatis. Nec sagittis aliquam malesuada bibendum. Risus in hendrerit
      gravida rutrum quisque non tellus. Lectus arcu bibendum at varius vel
      pharetra vel turpis. Quam id leo in vitae turpis massa sed. Lorem dolor sed
      viverra ipsum nunc aliquet. Sit amet consectetur adipiscing elit
      pellentesque habitant morbi. At urna condimentum mattis pellentesque id
      nibh tortor id aliquet.
    `,
  }
}

app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')));

app.get('/api/posts', (req, res) => res.json({ data: posts, message: 'yep' }));

app.get('/api/posts/:id', (req, res) => {
  if (posts[req.params.id] !== undefined) {
    return res.json({ data: posts[req.params.id], message: 'have fun' })
  } else {
    return res.status(404).json({ data: null, message: `post with id ${req.params.id} not found` });
  }
})

app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'index.html')));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`running on http://localhost:${port}/`));
