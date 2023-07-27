SELECT cohort_id, COUNT(*) AS student_count
FROM students
GROUP BY cohort_id
HAVING COUNT(*) >= 18
ORDER BY student_count;
