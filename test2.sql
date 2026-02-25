
#Here i got my merchantid;
select * from applicationid_merchant where applicationid = '77693824005';

# Here i got all my transactions
select *  from transactions where merchantid = '7142574';

# Here i got the max amount
select *  
from transactions 
where merchantid = '7142574' 
and description LIKE 'M%' order by amount ASC  limit 1;