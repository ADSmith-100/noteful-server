function makeNotesArray() {
  return [
    {
      id: 1,
      name: "First test note!",
      modified: "2029-01-22T16:28:32.615Z",
      folderid: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?",
    },
    {
      id: 2,
      name: "First test note!",
      modified: "2029-01-22T16:28:32.615Z",
      folderid: 2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?",
    },
    {
      id: 3,
      name: "First test note!",
      modified: "2029-01-22T16:28:32.615Z",
      folderid: 3,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?",
    },
    {
      id: 4,
      name: "First test note!",
      modified: "2029-01-22T16:28:32.615Z",
      folderid: 4,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?",
    },
  ];
}

function makeMaliciousNote() {
  const maliciousNote = {
    id: 911,
    name:
      'Naughty naughty very naughty &lt;script&gt;alert("xss");&lt;/script&gt;',
    modified: new Date().toISOString(),
    folderid: 1,
    content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
  };
  const expectedNote = {
    ...maliciousNote,
    name:
      'Naughty naughty very naughty &lt;script&gt;alert("xss");&lt;/script&gt;',
    content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`,
  };
  return {
    maliciousNote,
    expectedNote,
  };
}

module.exports = {
  makeNotesArray,
  makeMaliciousNote,
};
