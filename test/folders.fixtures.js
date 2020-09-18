function makeFoldersArray() {
  return [
    {
      id: 1,
      name: "Test Folder 1",
    },
    {
      id: 2,
      name: "Test Folder 2",
    },
    {
      id: 3,
      name: "Test Folder 3",
    },
    {
      id: 4,
      name: "Test Folder 4",
    },
  ];
}

function makeMaliciousFolder() {
  const maliciousFolder = {
    id: 911,
    name:
      'Naughty naughty very naughty &lt;script&gt;alert("xss");&lt;/script&gt;',
  };
  const expectedFolder = {
    ...maliciousFolder,
    name:
      'Naughty naughty very naughty &lt;script&gt;alert("xss");&lt;/script&gt;',
  };
  return {
    maliciousFolder,
    expectedFolder,
  };
}

module.exports = {
  makeFoldersArray,
  makeMaliciousFolder,
};
