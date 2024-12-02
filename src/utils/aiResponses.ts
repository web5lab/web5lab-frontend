interface Response {
  keywords: string[];
  reply: string;
}

export const aiResponses: Response[] = [
  // Smart Contract Development
  {
    keywords: ['smart', 'contract', 'development', 'contracts'],
    reply: "I can help accelerate your smart contract development! Our AI-powered tools can:\n\n• Auto-generate contract boilerplate\n• Perform security analysis\n• Suggest gas optimizations\n• Generate test cases\n\nWould you like to see an example?"
  },
  {
    keywords: ['solidity', 'code', 'generate', 'create'],
    reply: "I can help generate Solidity code with best practices! Our AI can:\n\n• Create ERC standard implementations\n• Generate secure access control\n• Implement common patterns\n• Add natspec documentation\n\nWhat type of contract do you need?"
  },
  {
    keywords: ['test', 'testing', 'coverage'],
    reply: "Our AI testing suite provides:\n\n• Automated test case generation\n• Fuzzing scenarios\n• Coverage analysis\n• Integration test templates\n\nShall I show you an example test suite?"
  },
  // DeFi and Protocols
  {
    keywords: ['defi', 'protocol', 'finance'],
    reply: "Our AI accelerates DeFi development by:\n\n• Analyzing similar protocols\n• Suggesting optimal parameters\n• Automating integration tests\n• Monitoring for vulnerabilities\n\nWhat type of DeFi protocol are you building?"
  },
  {
    keywords: ['yield', 'farming', 'staking'],
    reply: "For yield farming protocols, our AI can:\n\n• Optimize reward distributions\n• Calculate APY projections\n• Generate staking contracts\n• Implement harvesting logic\n\nWould you like to see example calculations?"
  },
  {
    keywords: ['amm', 'dex', 'exchange'],
    reply: "For DEX development, our AI assists with:\n\n• Liquidity pool optimization\n• Price impact calculations\n• Slippage protection\n• Flash loan prevention\n\nWhat type of exchange model interests you?"
  },
  // Security and Auditing
  {
    keywords: ['audit', 'security', 'vulnerabilities'],
    reply: "Our AI security suite includes:\n\n• Automated vulnerability scanning\n• Pattern-based threat detection\n• Gas optimization analysis\n• Best practices verification\n\nWould you like a sample security report?"
  },
  {
    keywords: ['gas', 'optimization', 'efficient'],
    reply: "Our AI can optimize gas usage by:\n\n• Identifying expensive operations\n• Suggesting storage optimizations\n• Analyzing loop efficiency\n• Recommending batch operations\n\nWould you like a gas analysis report?"
  },
  // Tokenomics and Economics
  {
    keywords: ['token', 'tokenomics', 'economics'],
    reply: "Our AI can help design tokenomics by:\n\n• Modeling token distribution\n• Simulating market scenarios\n• Calculating emission rates\n• Analyzing similar tokens\n\nWhat's your token use case?"
  },
  {
    keywords: ['governance', 'dao', 'voting'],
    reply: "For DAO development, our AI assists with:\n\n• Governance token design\n• Voting mechanism selection\n• Proposal threshold analysis\n• Timelock configurations\n\nWhat governance features do you need?"
  },
  // Infrastructure and Scaling
  {
    keywords: ['layer2', 'scaling', 'rollup'],
    reply: "For L2 solutions, our AI can help with:\n\n• Rollup configuration\n• Bridge contract security\n• State verification\n• Gas optimization\n\nWhich scaling solution interests you?"
  },
  {
    keywords: ['bridge', 'cross-chain', 'interoperability'],
    reply: "For cross-chain solutions, our AI provides:\n\n• Bridge contract templates\n• Security best practices\n• Message verification\n• Asset mapping logic\n\nWhat chains are you connecting?"
  },
  // NFT Development
  {
    keywords: ['nft', 'collectible', 'token'],
    reply: "For NFT projects, our AI can:\n\n• Generate metadata structures\n• Implement minting logic\n• Create marketplace contracts\n• Optimize gas for batches\n\nWhat type of NFT project are you building?"
  },
  {
    keywords: ['marketplace', 'trading', 'auction'],
    reply: "For NFT marketplaces, our AI assists with:\n\n• Listing mechanisms\n• Auction implementations\n• Royalty calculations\n• Trading fee optimization\n\nWhat marketplace features do you need?"
  },
  {
    keywords: ['cost', 'price', 'pricing'],
    reply: "Our AI-accelerated development typically reduces costs by 40-60%. We offer:\n\n• Pay-as-you-go API access\n• Custom model training\n• Full-service development\n\nWould you like to discuss your specific requirements?"
  },
  {
    keywords: ['time', 'fast', 'quick', 'speed'],
    reply: "Our AI tools speed up development by:\n\n• Generating code scaffolding\n• Automated testing\n• Real-time code analysis\n• Instant documentation generation\n\nTypically, we reduce development time by 60-70%!"
  },
  // Development Process
  {
    keywords: ['process', 'methodology', 'workflow'],
    reply: "Our AI-driven development process includes:\n\n• Automated code review\n• Continuous security scanning\n• Documentation generation\n• Test automation\n\nWould you like to see our workflow?"
  },
  {
    keywords: ['deploy', 'deployment', 'mainnet'],
    reply: "Our AI deployment assistant helps with:\n\n• Network selection\n• Gas price optimization\n• Verification automation\n• Post-deployment checks\n\nWhich network are you targeting?"
  },
  // Support and Documentation
  {
    keywords: ['help', 'support', 'assistance'],
    reply: "I can help you with:\n\n• Technical questions\n• Best practices\n• Code examples\n• Security guidelines\n\nWhat specific help do you need?"
  },
  {
    keywords: ['example', 'sample', 'template'],
    reply: "I can provide examples for:\n\n• Smart contracts\n• Test suites\n• Integration patterns\n• Security measures\n\nWhat type of example would you like to see?"
  }
];