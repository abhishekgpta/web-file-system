const sampleFileSystem = {
    'b1c7edde29d3eb184c3cdb241d134192': {
      type: 'FOLDER',
      name: 'root',
      path: '/',
      size: 0,
      date: '2019-04-07',
      creatorName: 'admin',
      parentPath: null,
      parentID: null,
      children: [
        'd0ed15ea400a8a019a385d6315aabdd7',
        '7019de0fce5ed98538b34b51e4f12929',
        'fce1d4226071811e4dff987d96ba33aa',
        '809a4b3d9e57a5410829ccbedffbf923',
        '881d6a1d8f1a0670655924750f733b2e',
        'b8dcf9a4261717e0572f4bd41a24f0ab'
      ]
    },
    'd0ed15ea400a8a019a385d6315aabdd7': {
      type: 'FOLDER',
      name: 'apps',
      creatorName: 'Admin',
      size: 223,
      date: '2019-10-29',
      parentID: 'b1c7edde29d3eb184c3cdb241d134192',
      parentPath: '/',
      path: '/apps',
      children: []
    },
    '7019de0fce5ed98538b34b51e4f12929': {
      type: 'FOLDER',
      name: 'pictures',
      creatorName: 'Admin',
      size: 23,
      date: '2019-10-29',
      parentID: 'b1c7edde29d3eb184c3cdb241d134192',
      parentPath: '/',
      path: '/pictures',
      children: []
    },
    fce1d4226071811e4dff987d96ba33aa: {
      type: 'FOLDER',
      name: 'videos',
      creatorName: 'Admin',
      size: 0,
      date: '2019-10-29',
      parentID: 'b1c7edde29d3eb184c3cdb241d134192',
      parentPath: '/',
      path: '/videos',
      children: []
    },
    '809a4b3d9e57a5410829ccbedffbf923': {
      type: 'FOLDER',
      name: 'docs',
      creatorName: 'Admin',
      size: 81,
      date: '2019-10-29',
      parentID: 'b1c7edde29d3eb184c3cdb241d134192',
      parentPath: '/',
      path: '/docs',
      children: [
        '7bd469e12c78cf2de53707cb90cf5ab5',
        '10d60c9f1f675fdb84569372765b4194',
        '22da1e9fbd7545d51068296a90e43846'
      ]
    },
    "881d6a1d8f1a0670655924750f733b2e": {
      type: 'FILE',
      name: 'a.pdf',
      creatorName: 'Admin',
      size: 75,
      date: '2019-10-29',
      parentID: 'b1c7edde29d3eb184c3cdb241d134192',
      parentPath: '/',
      path: '/a.pdf'
    },
    'b8dcf9a4261717e0572f4bd41a24f0ab': {
      type: 'FILE',
      name: 'b.jpg',
      creatorName: 'Admin',
      size: 0,
      date: '2019-10-29',
      parentID: 'b1c7edde29d3eb184c3cdb241d134192',
      parentPath: '/',
      path: '/b.jpg'
    },
    '7bd469e12c78cf2de53707cb90cf5ab5': {
      type: 'FOLDER',
      name: 'work',
      creatorName: 'Admin',
      size: 200,
      date: '2019-10-29',
      parentID: '809a4b3d9e57a5410829ccbedffbf923',
      parentPath: '/docs',
      path: '/docs/work',
      children: [
        'b42eff45517edc2e543b3d2750bd08c3',
        '00ce12a7746322ce403e17992674f81b'
      ]
    },
    '10d60c9f1f675fdb84569372765b4194': {
      type: 'FILE',
      name: 'c.pdf',
      creatorName: 'Admin',
      size: 200,
      date: '2019-10-29',
      parentID: '809a4b3d9e57a5410829ccbedffbf923',
      parentPath: '/docs',
      path: '/docs/c.pdf'
    },
    '22da1e9fbd7545d51068296a90e43846': {
      type: 'FILE',
      name: 'd.docx',
      creatorName: 'Admin',
      size: 235,
      date: '2019-10-29',
      parentID: '809a4b3d9e57a5410829ccbedffbf923',
      parentPath: '/docs',
      path: '/docs/d.docx'
    },
    b42eff45517edc2e543b3d2750bd08c3: {
      type: 'FILE',
      name: 'e.pdf',
      creatorName: 'Admin',
      size: 0,
      date: '2019-10-29',
      parentID: '7bd469e12c78cf2de53707cb90cf5ab5',
      parentPath: '/docs/work',
      path: '/docs/work/e.pdf'
    },
    '00ce12a7746322ce403e17992674f81b': {
      type: 'FILE',
      name: 'f.ts',
      creatorName: 'Admin',
      size: 7,
      date: '2019-10-29',
      parentID: '7bd469e12c78cf2de53707cb90cf5ab5',
      parentPath: '/docs/work',
      path: '/docs/work/f.ts'
    }
  };
  
  const getSampleFileSystem = () => {
    localStorage.setItem('fileSystem', JSON.stringify(sampleFileSystem));
    return sampleFileSystem;
  };
  
  export default getSampleFileSystem;
  