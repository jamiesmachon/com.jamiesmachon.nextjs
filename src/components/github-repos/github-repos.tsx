import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

async function getGithubRepos() {
  const repos = await fetch('https://api.github.com/users/jamiesmachon/repos');

  if (!repos.ok) {
    throw new Error('Failed to fetch repos');
  }

  return repos.json();
}

async function GitHubRepos() {
  const repos = await getGithubRepos();
  console.log('getGithubRepos: ', repos);

  return (
    <>
      {repos.map((repo: any) => {
        return (
          <Card key={repo.id}>
            <CardHeader>
              <CardTitle>{repo.name}</CardTitle>
              <CardDescription>{repo.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
}

export default GitHubRepos;
