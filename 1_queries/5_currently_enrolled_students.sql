SELECT id, name, email, cohort_id
FROM students
where end_date IS NULL 
ORDER BY cohort_id;