const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2] ? `%${process.argv[2]}%` : '%';
const resultLimit = process.argv[3] || 5;

const query = `
  SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohorts.id = students.cohort_id
  WHERE cohorts.name LIKE $1
  LIMIT $2;
`;

pool.query(query, [cohortName, resultLimit])
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
    });
    pool.end();
  })
  .catch(err => {
    console.error('Error executing query:', err);
    pool.end(() => process.exit(1));
  });
