SELECT cohorts.name AS cohort,
       TO_CHAR(INTERVAL '1 second' * SUM(EXTRACT(EPOCH FROM completed_at - started_at)), 'HH24:MI:SS') AS total_duration
FROM cohorts
LEFT JOIN students ON cohorts.id = students.cohort_id
LEFT JOIN assistance_requests ON students.id = assistance_requests.student_id
GROUP BY cohorts.name
ORDER BY total_duration;
