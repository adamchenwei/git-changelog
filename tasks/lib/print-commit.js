
var debug = require('debug')('changelog:printSection');
var format = require('util').format;

function printCommit(commit, printCommitLinks, printBody) {
  var prefix = '';
  var result = '';
  console.log('-^-^--');
  console.log(commit);
  console.log(printCommitLinks);
  console.log('-^--^-');
  if (printCommitLinks) {
    result += format('%s\n  (%s', commit.subject, this.linkToCommit(commit.hash));

    if (commit.closes.length) {
     result += ',\n   ' + commit.closes.map(this.linkToIssue, this).join(', ');
    }
    result += ')\n';
  } else {
    result += format('%s\n', commit.subject);
  }

  if (printBody) {
    result += format('%s\n', commit.body);
  }

  console.log('\x1b[35m%s\x1b[0m', result);
  return result;
}

module.exports = printCommit;