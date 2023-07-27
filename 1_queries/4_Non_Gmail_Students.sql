SELECT id, name, email, cohort_id
FROM students
WHERE email NOT LIKE '%gmail.com'
OR phone IS NULL
ORDER BY name;