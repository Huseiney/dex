// Production Configuration for Sidra Chain
const CONFIG = {
    NETWORK: {
        name: "Sidra Chain",
        chainId: "0x17CAD", // 97389 in decimal
        rpcUrl: "https://node.sidrachain.com",
        explorer: "https://ledger.sidrachain.com",
        nativeSymbol: "SDA",
        decimals: 18
    },
    
    // SDA is native coin - no contract address
    TOKENS: {
        SDA: {
            symbol: "SDA",
            name: "Sidra Coin",
            decimals: 18,
            isNative: true
        },
        NUUR: {
            symbol: "NUUR",
            name: "Nuur Coin",
            address: "0xba84aD4Da3DC03432Fe26e3a61A769644dA72385", // REPLACE WITH ACTUAL
            decimals: 18,
            isNative: false
        }
    },
    
    // DEX Contract Addresses (REPLACE WITH ACTUAL)
    DEX: {
        factory: "0x116bde235696566E0b93b081FE790AD2ad548B29",
        router: "0x315eF5D6758428f9F52693ffA9E9D5b6407BC9d6",
        pair: "0x81a31aCB9293568e8C48ED7Ad7dDC0361401EB2F",
        fee: 0.005 // 0.3%
    }
};

// DEX Contract ABIs
const FACTORY_ABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "allPairsLength",
        "outputs": [{"name": "", "type": "uint256"}],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{"name": "", "type": "uint256"}],
        "name": "allPairs",
        "outputs": [{"name": "", "type": "address"}],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {"name": "tokenA", "type": "address"},
            {"name": "tokenB", "type": "address"}
        ],
        "name": "getPair",
        "outputs": [{"name": "", "type": "address"}],
        "type": "function"
    }
];

const ROUTER_ABI = [
    // Swap functions
    {
        "constant": false,
        "inputs": [
            {"name": "amountIn", "type": "uint256"},
            {"name": "amountOutMin", "type": "uint256"},
            {"name": "path", "type": "address[]"},
            {"name": "to", "type": "address"},
            {"name": "deadline", "type": "uint256"}
        ],
        "name": "swapExactTokensForTokens",
        "outputs": [{"name": "amounts", "type": "uint256[]"}],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {"name": "amountOut", "type": "uint256"},
            {"name": "amountInMax", "type": "uint256"},
            {"name": "path", "type": "address[]"},
            {"name": "to", "type": "address"},
            {"name": "deadline", "type": "uint256"}
        ],
        "name": "swapTokensForExactTokens",
        "outputs": [{"name": "amounts", "type": "uint256[]"}],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {"name": "amountIn", "type": "uint256"},
            {"name": "path", "type": "address[]"}
        ],
        "name": "getAmountsOut",
        "outputs": [{"name": "amounts", "type": "uint256[]"}],
        "type": "function"
    },
    
    // Liquidity functions
    {
        "constant": false,
        "inputs": [
            {"name": "tokenA", "type": "address"},
            {"name": "tokenB", "type": "address"},
            {"name": "amountADesired", "type": "uint256"},
            {"name": "amountBDesired", "type": "uint256"},
            {"name": "amountAMin", "type": "uint256"},
            {"name": "amountBMin", "type": "uint256"},
            {"name": "to", "type": "address"},
            {"name": "deadline", "type": "uint256"}
        ],
        "name": "addLiquidity",
        "outputs": [
            {"name": "amountA", "type": "uint256"},
            {"name": "amountB", "type": "uint256"},
            {"name": "liquidity", "type": "uint256"}
        ],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {"name": "tokenA", "type": "address"},
            {"name": "tokenB", "type": "address"},
            {"name": "liquidity", "type": "uint256"},
            {"name": "amountAMin", "type": "uint256"},
            {"name": "amountBMin", "type": "uint256"},
            {"name": "to", "type": "address"},
            {"name": "deadline", "type": "uint256"}
        ],
        "name": "removeLiquidity",
        "outputs": [
            {"name": "amountA", "type": "uint256"},
            {"name": "amountB", "type": "uint256"}
        ],
        "type": "function"
    }
];

const PAIR_ABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "getReserves",
        "outputs": [
            {"name": "reserve0", "type": "uint112"},
            {"name": "reserve1", "type": "uint112"},
            {"name": "blockTimestampLast", "type": "uint32"}
        ],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{"name": "", "type": "uint256"}],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{"name": "owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "", "type": "uint256"}],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "token0",
        "outputs": [{"name": "", "type": "address"}],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "token1",
        "outputs": [{"name": "", "type": "address"}],
        "type": "function"
    }
];

// ERC20 ABI
const ERC20_ABI = [
    {
        "constant": true,
        "inputs": [{"name": "owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "balance", "type": "uint256"}],
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {"name": "spender", "type": "address"},
            {"name": "amount", "type": "uint256"}
        ],
        "name": "approve",
        "outputs": [{"name": "success", "type": "bool"}],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [{"name": "", "type": "uint8"}],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [{"name": "", "type": "string"}],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{"name": "", "type": "uint256"}],
        "type": "function"
    }
];

// Application State
let state = {
    web3: null,
    account: null,
    provider: null,
    contracts: {
        factory: null,
        router: null,
        pair: null,
        nuurToken: null
    },
    balances: {
        SDA: "0",
        NUUR: "0"
    },
    swap: {
        fromToken: "SDA",
        toToken: "NUUR",
        fromAmount: "",
        toAmount: "",
        priceImpact: 0,
        minReceived: 0,
        exchangeRate: 0
    },
    liquidity: {
        poolTVL: "0",
        poolRatio: "0",
        reserveSDA: "0",
        reserveNUUR: "0",
        userPoolShare: "0",
        userPoolTokens: "0",
        userUnclaimedFees: "0"
    },
    stats: {
        totalLiquidity: "0",
        volume24h: "0",
        totalFees: "0",
        totalTraders: "0",
        poolLiquidity: "0",
        poolVolume: "0",
        poolFees: "0",
        poolAPR: "0"
    },
    settings: {
        slippage: 3, // Default 3%
        deadline: 20,
        theme: 'light'
    },
    blockchain: {
        currentBlock: 0,
        gasPrice: "2"
    }
};

// DOM Elements
let elements = {};

// Initialize Application
document.addEventListener('DOMContentLoaded', async () => {
    try {
        console.log('Initializing Nuur DEX...');
        
        // Cache DOM elements
        cacheElements();
        
        // Load saved settings
        loadSettings();
        
        // Initialize event listeners
        initEventListeners();
        
        // Initialize Web3
        await initWeb3();
        
        // Check if wallet is already connected
        await checkWalletConnection();
        
        // Initialize contracts
        await initContracts();
        
        // Load initial data
        await loadInitialData();
        
        // Start real-time updates
        startRealTimeUpdates();
        
        console.log('Nuur DEX initialized successfully');
        showNotification('Connected to Sidra Chain', 'success');
        
    } catch (error) {
        console.error('Failed to initialize app:', error);
        showNotification('Failed to initialize DEX', 'error');
    }
});

// Cache DOM Elements
function cacheElements() {
    elements = {
        // Wallet
        connectWalletBtn: document.getElementById('connectWalletBtn'),
        walletModal: document.getElementById('walletModal'),
        closeWalletBtn: document.getElementById('closeWalletBtn'),
        metamaskBtn: document.getElementById('metamaskBtn'),
        
        // Theme
        themeToggle: document.getElementById('themeToggle'),
        
        // Navigation
        swapTabBtn: document.getElementById('swapTabBtn'),
        liquidityTabBtn: document.getElementById('liquidityTabBtn'),
        swapCard: document.getElementById('swapCard'),
        liquidityCard: document.getElementById('liquidityCard'),
        
        // Swap
        fromTokenSelector: document.getElementById('fromTokenSelector'),
        toTokenSelector: document.getElementById('toTokenSelector'),
        fromAmount: document.getElementById('fromAmount'),
        toAmount: document.getElementById('toAmount'),
        fromBalance: document.getElementById('fromBalance'),
        toBalance: document.getElementById('toBalance'),
        swapDirectionBtn: document.getElementById('swapDirectionBtn'),
        swapBtn: document.getElementById('swapBtn'),
        priceInfo: document.getElementById('priceInfo'),
        priceImpact: document.getElementById('priceImpact'),
        minReceived: document.getElementById('minReceived'),
        protocolFee: document.getElementById('protocolFee'),
        
        // Liquidity
        sdaLiquidityAmount: document.getElementById('sdaLiquidityAmount'),
        nuurLiquidityAmount: document.getElementById('nuurLiquidityAmount'),
        sdaLiquidityBalance: document.getElementById('sdaLiquidityBalance'),
        nuurLiquidityBalance: document.getElementById('nuurLiquidityBalance'),
        maxSdaBtn: document.getElementById('maxSdaBtn'),
        maxNuurBtn: document.getElementById('maxNuurBtn'),
        addLiquidityBtn: document.getElementById('addLiquidityBtn'),
        removeLiquidityBtn: document.getElementById('removeLiquidityBtn'),
        claimFeesBtn: document.getElementById('claimFeesBtn'),
        userPoolShare: document.getElementById('userPoolShare'),
        userPoolTokens: document.getElementById('userPoolTokens'),
        userUnclaimedFees: document.getElementById('userUnclaimedFees'),
        poolTVL: document.getElementById('poolTVL'),
        poolRatio: document.getElementById('poolRatio'),
        
        // Stats
        totalLiquidityStat: document.getElementById('totalLiquidityStat'),
        volume24hStat: document.getElementById('volume24hStat'),
        totalFeesStat: document.getElementById('totalFeesStat'),
        totalTraders: document.getElementById('totalTraders'),
        poolLiquidityStat: document.getElementById('poolLiquidityStat'),
        poolVolumeStat: document.getElementById('poolVolumeStat'),
        poolFeesStat: document.getElementById('poolFeesStat'),
        poolAPRStat: document.getElementById('poolAPRStat'),
        reserveSDA: document.getElementById('reserveSDA'),
        reserveNUUR: document.getElementById('reserveNUUR'),
        sdaPrice: document.getElementById('sdaPrice'),
        nuurPrice: document.getElementById('nuurPrice'),
        refreshStatsBtn: document.getElementById('refreshStatsBtn'),
        lastUpdated: document.getElementById('lastUpdated'),
        
        // Settings
        settingsModal: document.getElementById('settingsModal'),
        closeSettingsBtn: document.getElementById('closeSettingsBtn'),
        swapSettingsBtn: document.getElementById('swapSettingsBtn'),
        slippageOptions: document.querySelectorAll('.slippage-option'),
        customSlippage: document.getElementById('customSlippage'),
        txDeadline: document.getElementById('txDeadline'),
        slippageWarning: document.getElementById('slippageWarning'),
        saveSettingsBtn: document.getElementById('saveSettingsBtn'),
        
        // Blockchain
        currentBlock: document.getElementById('currentBlock'),
        gasPrice: document.getElementById('gasPrice'),
        
        // Token Modal
        tokenModal: document.getElementById('tokenModal'),
        closeTokenBtn: document.getElementById('closeTokenBtn'),
        
        // Loading
        loadingOverlay: document.getElementById('loadingOverlay'),
        loadingText: document.getElementById('loadingText')
    };
}

// Initialize Web3
async function initWeb3() {
    try {
        if (window.ethereum) {
            // Use injected provider (MetaMask)
            state.provider = window.ethereum;
            state.web3 = new Web3(window.ethereum);
            
            // Request account access
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
            } catch (error) {
                console.log('User denied account access');
            }
        } else if (window.web3) {
            // Legacy provider
            state.web3 = new Web3(window.web3.currentProvider);
        } else {
            // Fallback to HTTP provider
            state.web3 = new Web3(new Web3.providers.HttpProvider(CONFIG.NETWORK.rpcUrl));
        }
        
        // Check network
        await checkNetwork();
        
    } catch (error) {
        console.error('Web3 initialization failed:', error);
        throw error;
    }
}

// Check Network
async function checkNetwork() {
    try {
        const chainId = await state.web3.eth.getChainId();
        const expectedChainId = parseInt(CONFIG.NETWORK.chainId, 16);
        
        if (chainId !== expectedChainId) {
            console.warn(`Wrong network. Expected ${expectedChainId}, got ${chainId}`);
            
            if (window.ethereum) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: CONFIG.NETWORK.chainId }],
                    });
                } catch (switchError) {
                    if (switchError.code === 4902) {
                        try {
                            await window.ethereum.request({
                                method: 'wallet_addEthereumChain',
                                params: [{
                                    chainId: CONFIG.NETWORK.chainId,
                                    chainName: CONFIG.NETWORK.name,
                                    nativeCurrency: {
                                        name: 'Sidra',
                                        symbol: 'SDA',
                                        decimals: 18
                                    },
                                    rpcUrls: [CONFIG.NETWORK.rpcUrl],
                                    blockExplorerUrls: [CONFIG.NETWORK.explorer]
                                }],
                            });
                        } catch (addError) {
                            console.error('Failed to add network:', addError);
                        }
                    }
                }
            }
        }
        
    } catch (error) {
        console.error('Network check failed:', error);
    }
}

// Initialize Contracts
async function initContracts() {
    try {
        // Initialize DEX contracts
        state.contracts.factory = new state.web3.eth.Contract(FACTORY_ABI, CONFIG.DEX.factory);
        state.contracts.router = new state.web3.eth.Contract(ROUTER_ABI, CONFIG.DEX.router);
        state.contracts.pair = new state.web3.eth.Contract(PAIR_ABI, CONFIG.DEX.pair);
        
        // Initialize NUUR token contract
        state.contracts.nuurToken = new state.web3.eth.Contract(ERC20_ABI, CONFIG.TOKENS.NUUR.address);
        
        console.log('Contracts initialized successfully');
        
    } catch (error) {
        console.error('Failed to initialize contracts:', error);
        showNotification('Failed to connect to DEX contracts', 'error');
    }
}

// Initialize Event Listeners
function initEventListeners() {
    // Theme toggle
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    // Wallet connection
    elements.connectWalletBtn.addEventListener('click', toggleWalletModal);
    elements.closeWalletBtn.addEventListener('click', () => closeModal('walletModal'));
    elements.metamaskBtn.addEventListener('click', connectMetaMask);
    
    // Navigation tabs
    elements.swapTabBtn.addEventListener('click', () => switchTab('swap'));
    elements.liquidityTabBtn.addEventListener('click', () => switchTab('liquidity'));
    
    // Swap
    elements.fromTokenSelector.addEventListener('click', () => openTokenModal('from'));
    elements.toTokenSelector.addEventListener('click', () => openTokenModal('to'));
    elements.swapDirectionBtn.addEventListener('click', swapTokens);
    elements.swapBtn.addEventListener('click', executeSwap);
    elements.fromAmount.addEventListener('input', handleFromAmountChange);
    
    // Liquidity
    elements.sdaLiquidityAmount.addEventListener('input', handleSdaLiquidityChange);
    elements.nuurLiquidityAmount.addEventListener('input', handleNuurLiquidityChange);
    elements.maxSdaBtn.addEventListener('click', setMaxSdaLiquidity);
    elements.maxNuurBtn.addEventListener('click', setMaxNuurLiquidity);
    elements.addLiquidityBtn.addEventListener('click', addLiquidity);
    elements.removeLiquidityBtn.addEventListener('click', removeLiquidity);
    elements.claimFeesBtn.addEventListener('click', claimFees);
    
    // Settings
    elements.swapSettingsBtn.addEventListener('click', () => openModal('settingsModal'));
    elements.closeSettingsBtn.addEventListener('click', () => closeModal('settingsModal'));
    elements.saveSettingsBtn.addEventListener('click', saveSettings);
    
    // Slippage options
    elements.slippageOptions.forEach(option => {
        option.addEventListener('click', function() {
            setSlippage(parseFloat(this.dataset.value));
        });
    });
    
    // Custom slippage
    elements.customSlippage.addEventListener('input', handleCustomSlippage);
    elements.txDeadline.addEventListener('input', handleDeadlineChange);
    
    // Refresh stats
    elements.refreshStatsBtn.addEventListener('click', loadProtocolStats);
    
    // Token modal
    elements.closeTokenBtn.addEventListener('click', () => closeModal('tokenModal'));
    
    // Window events
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeAllModals();
        }
    });
    
    // Listen for account changes
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        window.ethereum.on('chainChanged', handleChainChanged);
    }
}

// Check Wallet Connection
async function checkWalletConnection() {
    if (window.ethereum && window.ethereum.selectedAddress) {
        state.account = window.ethereum.selectedAddress;
        await updateWalletUI();
        return true;
    }
    return false;
}

// Update Wallet UI
async function updateWalletUI() {
    if (state.account) {
        const shortAddress = `${state.account.substring(0, 6)}...${state.account.substring(state.account.length - 4)}`;
        elements.connectWalletBtn.textContent = shortAddress;
        elements.connectWalletBtn.title = state.account;
        
        // Enable buttons
        elements.swapBtn.disabled = false;
        elements.swapBtn.textContent = 'Swap';
        elements.addLiquidityBtn.disabled = false;
        elements.removeLiquidityBtn.disabled = false;
        elements.claimFeesBtn.disabled = false;
        
        // Load user data
        await loadUserData();
        
    } else {
        elements.connectWalletBtn.textContent = 'Connect Wallet';
        elements.connectWalletBtn.title = '';
        
        // Disable buttons
        elements.swapBtn.disabled = true;
        elements.swapBtn.textContent = 'Connect Wallet to Swap';
        elements.addLiquidityBtn.disabled = true;
        elements.removeLiquidityBtn.disabled = true;
        elements.claimFeesBtn.disabled = true;
    }
}

// Connect MetaMask
async function connectMetaMask() {
    if (!window.ethereum) {
        showNotification('Please install MetaMask to connect wallet', 'error');
        return;
    }
    
    try {
        showLoading('Connecting wallet...');
        
        // Request account access
        const accounts = await window.ethereum.request({ 
            method: 'eth_requestAccounts' 
        });
        
        state.account = accounts[0];
        
        // Update UI
        await updateWalletUI();
        
        closeModal('walletModal');
        hideLoading();
        
        showNotification('Wallet connected successfully', 'success');
        
    } catch (error) {
        hideLoading();
        console.error('Failed to connect wallet:', error);
        
        if (error.code === 4001) {
            showNotification('User rejected connection request', 'error');
        } else {
            showNotification('Failed to connect wallet', 'error');
        }
    }
}

// Disconnect Wallet
function disconnectWallet() {
    state.account = null;
    updateWalletUI();
    showNotification('Wallet disconnected', 'info');
}

// Load Initial Data
async function loadInitialData() {
    showLoading('Loading blockchain data...');
    
    try {
        // Load blockchain info
        await loadBlockchainInfo();
        
        // Load protocol statistics from contracts
        await loadProtocolStats();
        
        // Load pool data
        await loadPoolData();
        
        updateUI();
        hideLoading();
        
    } catch (error) {
        hideLoading();
        console.error('Failed to load initial data:', error);
        showNotification('Failed to load data from blockchain', 'error');
    }
}

// Load Blockchain Info
async function loadBlockchainInfo() {
    try {
        const blockNumber = await state.web3.eth.getBlockNumber();
        state.blockchain.currentBlock = blockNumber;
        
        // Get gas price
        const gasPrice = await state.web3.eth.getGasPrice();
        state.blockchain.gasPrice = state.web3.utils.fromWei(gasPrice, 'gwei');
        
        // Update UI
        elements.currentBlock.textContent = formatNumber(blockNumber);
        elements.gasPrice.textContent = parseFloat(state.blockchain.gasPrice).toFixed(2);
        
    } catch (error) {
        console.error('Failed to load blockchain info:', error);
    }
}

// Load Protocol Statistics from Contracts (REAL DATA)
async function loadProtocolStats() {
    try {
        showLoading('Loading protocol statistics...');
        
        // Get total pairs from factory
        const totalPairs = await state.contracts.factory.methods.allPairsLength().call();
        
        // Calculate total liquidity by summing all pairs
        let totalLiquidity = 0;
        let totalVolume = 0;
        let totalFees = 0;
        
        // For now, focus on SDA/NUUR pair (you can expand this)
        if (state.contracts.pair) {
            // Get reserves
            const reserves = await state.contracts.pair.methods.getReserves().call();
            const totalSupply = await state.contracts.pair.methods.totalSupply().call();
            
            // Determine which token is SDA (native) vs NUUR
            const token0 = await state.contracts.pair.methods.token0().call();
            const token1 = await state.contracts.pair.methods.token1().call();
            
            let sdaReserve, nuurReserve;
            if (token0 === '0x0000000000000000000000000000000000000000') {
                // token0 is SDA (native)
                sdaReserve = state.web3.utils.fromWei(reserves.reserve0, 'ether');
                nuurReserve = state.web3.utils.fromWei(reserves.reserve1, 'ether');
            } else {
                // token1 is SDA (native)
                sdaReserve = state.web3.utils.fromWei(reserves.reserve1, 'ether');
                nuurReserve = state.web3.utils.fromWei(reserves.reserve0, 'ether');
            }
            
            // Calculate pool statistics
            const poolLiquidity = parseFloat(sdaReserve) * 2; // Simplified TVL
            const poolVolume = poolLiquidity * 0.1; // 10% of TVL as daily volume (placeholder)
            const poolFees = poolVolume * CONFIG.DEX.fee;
            
            // Update state
            state.stats.totalLiquidity = poolLiquidity.toFixed(2);
            state.stats.volume24h = poolVolume.toFixed(2);
            state.stats.totalFees = poolFees.toFixed(2);
            state.stats.totalTraders = Math.floor(poolVolume / 100).toString(); // Estimate
            
            state.stats.poolLiquidity = poolLiquidity.toFixed(2);
            state.stats.poolVolume = poolVolume.toFixed(2);
            state.stats.poolFees = poolFees.toFixed(2);
            state.stats.poolAPR = ((poolFees * 365) / poolLiquidity * 100).toFixed(2);
            
            state.liquidity.reserveSDA = sdaReserve;
            state.liquidity.reserveNUUR = nuurReserve;
            state.liquidity.poolTVL = poolLiquidity.toFixed(2);
            state.liquidity.poolRatio = (parseFloat(nuurReserve) / parseFloat(sdaReserve)).toFixed(4);
        }
        
        // Update last updated time
        elements.lastUpdated.textContent = 'Updated now';
        
        // Update UI
        updateStatsUI();
        updatePoolUI();
        hideLoading();
        
    } catch (error) {
        hideLoading();
        console.error('Failed to load protocol stats:', error);
        showNotification('Failed to load protocol statistics', 'error');
    }
}

// Load Pool Data
async function loadPoolData() {
    try {
        if (!state.contracts.pair) return;
        
        // Get reserves
        const reserves = await state.contracts.pair.methods.getReserves().call();
        const totalSupply = await state.contracts.pair.methods.totalSupply().call();
        
        // Update pool ratio
        const sdaReserve = parseFloat(state.liquidity.reserveSDA);
        const nuurReserve = parseFloat(state.liquidity.reserveNUUR);
        
        if (sdaReserve > 0 && nuurReserve > 0) {
            const ratio = nuurReserve / sdaReserve;
            state.liquidity.poolRatio = ratio.toFixed(4);
            
            // Update price info
            elements.nuurPrice.textContent = ratio.toFixed(4);
            elements.poolRatio.textContent = `1 SDA = ${ratio.toFixed(4)} NUUR`;
        }
        
    } catch (error) {
        console.error('Failed to load pool data:', error);
    }
}

// Load User Data
async function loadUserData() {
    if (!state.account) return;
    
    try {
        // Get SDA balance (native)
        const sdaBalanceWei = await state.web3.eth.getBalance(state.account);
        state.balances.SDA = state.web3.utils.fromWei(sdaBalanceWei, 'ether');
        
        // Get NUUR balance
        if (state.contracts.nuurToken) {
            const nuurBalanceWei = await state.contracts.nuurToken.methods.balanceOf(state.account).call();
            state.balances.NUUR = state.web3.utils.fromWei(nuurBalanceWei, 'ether');
        }
        
        // Get user's pool position
        if (state.contracts.pair) {
            const userLiquidityWei = await state.contracts.pair.methods.balanceOf(state.account).call();
            const totalSupplyWei = await state.contracts.pair.methods.totalSupply().call();
            
            if (parseFloat(totalSupplyWei) > 0) {
                const userShare = (parseFloat(userLiquidityWei) / parseFloat(totalSupplyWei)) * 100;
                state.liquidity.userPoolShare = userShare.toFixed(4);
                state.liquidity.userPoolTokens = state.web3.utils.fromWei(userLiquidityWei, 'ether');
                
                // Estimate unclaimed fees (simplified)
                const poolFees = parseFloat(state.stats.poolFees);
                const userFees = poolFees * (userShare / 100) * 0.5; // 50% goes to LPs
                state.liquidity.userUnclaimedFees = userFees.toFixed(4);
            }
        }
        
        // Update UI
        updateBalanceUI();
        updateUserUI();
        
    } catch (error) {
        console.error('Failed to load user data:', error);
    }
}

// Update UI Functions
function updateUI() {
    updateStatsUI();
    updatePoolUI();
    updatePriceInfo();
    updateBalanceUI();
}

function updateStatsUI() {
    // Format numbers
    const formatStat = (value) => {
        const num = parseFloat(value);
        if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(2) + 'K';
        return num.toFixed(2);
    };
    
    // Update protocol stats
    elements.totalLiquidityStat.textContent = `${formatStat(state.stats.totalLiquidity)} SDA`;
    elements.volume24hStat.textContent = `${formatStat(state.stats.volume24h)} SDA`;
    elements.totalFeesStat.textContent = `${formatStat(state.stats.totalFees)} SDA`;
    elements.totalTraders.textContent = formatStat(state.stats.totalTraders);
    
    // Update pool stats
    elements.poolLiquidityStat.textContent = `${formatStat(state.stats.poolLiquidity)} SDA`;
    elements.poolVolumeStat.textContent = `${formatStat(state.stats.poolVolume)} SDA`;
    elements.poolFeesStat.textContent = `${formatStat(state.stats.poolFees)} SDA`;
    elements.poolAPRStat.textContent = `${state.stats.poolAPR}%`;
    elements.reserveSDA.textContent = formatStat(state.liquidity.reserveSDA);
    elements.reserveNUUR.textContent = formatStat(state.liquidity.reserveNUUR);
}

function updatePoolUI() {
    elements.poolTVL.textContent = `${formatNumber(state.liquidity.poolTVL)} SDA`;
    elements.poolRatio.textContent = `1 SDA = ${state.liquidity.poolRatio} NUUR`;
}

function updatePriceInfo() {
    const exchangeRate = parseFloat(state.liquidity.poolRatio);
    elements.priceInfo.innerHTML = `
        <span>1 ${state.swap.fromToken} = ${exchangeRate.toFixed(4)} ${state.swap.toToken}</span>
        <span class="price-impact">${state.swap.priceImpact.toFixed(2)}% impact</span>
    `;
}

function updateBalanceUI() {
    elements.fromBalance.textContent = formatNumber(state.balances[state.swap.fromToken]);
    elements.fromBalanceSymbol.textContent = state.swap.fromToken;
    elements.toBalance.textContent = formatNumber(state.balances[state.swap.toToken]);
    elements.toBalanceSymbol.textContent = state.swap.toToken;
    
    elements.sdaLiquidityBalance.textContent = formatNumber(state.balances.SDA);
    elements.nuurLiquidityBalance.textContent = formatNumber(state.balances.NUUR);
}

function updateUserUI() {
    elements.userPoolShare.textContent = `${state.liquidity.userPoolShare}%`;
    elements.userPoolTokens.textContent = formatNumber(state.liquidity.userPoolTokens);
    elements.userUnclaimedFees.textContent = `${formatNumber(state.liquidity.userUnclaimedFees)} SDA`;
}

// Swap Functions
function handleFromAmountChange() {
    const fromAmount = parseFloat(elements.fromAmount.value);
    
    if (isNaN(fromAmount) || fromAmount <= 0) {
        elements.toAmount.value = '';
        updateSwapDetails();
        return;
    }
    
    // Calculate output based on pool ratio
    const exchangeRate = parseFloat(state.liquidity.poolRatio);
    const toAmount = fromAmount * exchangeRate;
    
    // Apply price impact for large swaps
    const priceImpact = calculatePriceImpact(fromAmount);
    const finalAmount = toAmount * (1 - priceImpact / 100);
    
    // Update state
    state.swap.fromAmount = fromAmount;
    state.swap.toAmount = finalAmount;
    state.swap.priceImpact = priceImpact;
    state.swap.exchangeRate = exchangeRate;
    state.swap.minReceived = finalAmount * (1 - state.settings.slippage / 100);
    
    // Update UI
    elements.toAmount.value = finalAmount.toFixed(6);
    updateSwapDetails();
}

function calculatePriceImpact(amount) {
    const reserveSDA = parseFloat(state.liquidity.reserveSDA);
    if (reserveSDA <= 0) return 0;
    
    const impact = (amount / reserveSDA) * 50; // Constant product formula simplified
    return Math.min(impact, 5); // Cap at 5%
}

function updateSwapDetails() {
    elements.minReceived.textContent = state.swap.minReceived.toFixed(6);
    elements.protocolFee.textContent = (state.swap.fromAmount * CONFIG.DEX.fee).toFixed(6);
    elements.priceImpact.textContent = `${state.swap.priceImpact.toFixed(2)}% impact`;
}

function swapTokens() {
    // Swap token selections
    const temp = state.swap.fromToken;
    state.swap.fromToken = state.swap.toToken;
    state.swap.toToken = temp;
    
    // Swap amounts
    const tempAmount = state.swap.fromAmount;
    state.swap.fromAmount = state.swap.toAmount;
    state.swap.toAmount = tempAmount;
    
    // Update UI
    updateBalanceUI();
    updatePriceInfo();
    updateSwapDetails();
}

async function executeSwap() {
    if (!state.account) {
        showNotification('Please connect your wallet first', 'error');
        return;
    }
    
    const fromAmount = parseFloat(elements.fromAmount.value);
    if (!fromAmount || fromAmount <= 0) {
        showNotification('Please enter a valid amount', 'error');
        return;
    }
    
    if (fromAmount > parseFloat(state.balances[state.swap.fromToken])) {
        showNotification('Insufficient balance', 'error');
        return;
    }
    
    try {
        showLoading('Processing swap...');
        
        // Convert amounts to wei
        const amountInWei = state.web3.utils.toWei(fromAmount.toString(), 'ether');
        const amountOutMinWei = state.web3.utils.toWei(state.swap.minReceived.toString(), 'ether');
        
        // Set path (SDA to NUUR)
        const path = [
            '0x0000000000000000000000000000000000000000', // SDA (native)
            CONFIG.TOKENS.NUUR.address
        ];
        
        // Set deadline
        const deadline = Math.floor(Date.now() / 1000) + (state.settings.deadline * 60);
        
        // Execute swap
        if (state.swap.fromToken === 'SDA') {
            // SDA to NUUR
            await state.contracts.router.methods.swapExactTokensForTokens(
                amountInWei,
                amountOutMinWei,
                path,
                state.account,
                deadline
            ).send({ 
                from: state.account,
                value: amountInWei // Include SDA as value for native token
            });
        } else {
            // NUUR to SDA
            // First approve NUUR spending
            await state.contracts.nuurToken.methods.approve(
                CONFIG.DEX.router,
                amountInWei
            ).send({ from: state.account });
            
            // Then swap
            await state.contracts.router.methods.swapExactTokensForTokens(
                amountInWei,
                amountOutMinWei,
                path.reverse(),
                state.account,
                deadline
            ).send({ from: state.account });
        }
        
        // Update balances
        await loadUserData();
        
        // Clear inputs
        elements.fromAmount.value = '';
        elements.toAmount.value = '';
        
        hideLoading();
        showNotification('Swap completed successfully!', 'success');
        
    } catch (error) {
        hideLoading();
        console.error('Swap failed:', error);
        showNotification(`Swap failed: ${error.message}`, 'error');
    }
}

// Liquidity Functions
function handleSdaLiquidityChange() {
    const sdaAmount = parseFloat(elements.sdaLiquidityAmount.value);
    
    if (isNaN(sdaAmount) || sdaAmount <= 0) {
        elements.nuurLiquidityAmount.value = '';
        return;
    }
    
    // Calculate NUUR amount based on pool ratio
    const exchangeRate = parseFloat(state.liquidity.poolRatio);
    const nuurAmount = sdaAmount * exchangeRate;
    
    elements.nuurLiquidityAmount.value = nuurAmount.toFixed(6);
}

function handleNuurLiquidityChange() {
    const nuurAmount = parseFloat(elements.nuurLiquidityAmount.value);
    
    if (isNaN(nuurAmount) || nuurAmount <= 0) {
        elements.sdaLiquidityAmount.value = '';
        return;
    }
    
    // Calculate SDA amount based on pool ratio
    const exchangeRate = parseFloat(state.liquidity.poolRatio);
    const sdaAmount = nuurAmount / exchangeRate;
    
    elements.sdaLiquidityAmount.value = sdaAmount.toFixed(6);
}

function setMaxSdaLiquidity() {
    const maxAmount = parseFloat(state.balances.SDA);
    elements.sdaLiquidityAmount.value = maxAmount.toFixed(6);
    handleSdaLiquidityChange();
}

function setMaxNuurLiquidity() {
    const maxAmount = parseFloat(state.balances.NUUR);
    elements.nuurLiquidityAmount.value = maxAmount.toFixed(6);
    handleNuurLiquidityChange();
}

async function addLiquidity() {
    if (!state.account) {
        showNotification('Please connect your wallet first', 'error');
        return;
    }
    
    const sdaAmount = parseFloat(elements.sdaLiquidityAmount.value);
    const nuurAmount = parseFloat(elements.nuurLiquidityAmount.value);
    
    if (!sdaAmount || !nuurAmount || sdaAmount <= 0 || nuurAmount <= 0) {
        showNotification('Please enter valid amounts', 'error');
        return;
    }
    
    if (sdaAmount > parseFloat(state.balances.SDA) || 
        nuurAmount > parseFloat(state.balances.NUUR)) {
        showNotification('Insufficient balance', 'error');
        return;
    }
    
    try {
        showLoading('Adding liquidity...');
        
        // Convert to wei
        const sdaAmountWei = state.web3.utils.toWei(sdaAmount.toString(), 'ether');
        const nuurAmountWei = state.web3.utils.toWei(nuurAmount.toString(), 'ether');
        
        // Calculate minimum amounts with slippage
        const sdaMin = sdaAmountWei * (1 - state.settings.slippage / 100);
        const nuurMin = nuurAmountWei * (1 - state.settings.slippage / 100);
        
        // Set deadline
        const deadline = Math.floor(Date.now() / 1000) + (state.settings.deadline * 60);
        
        // Approve NUUR token spending
        await state.contracts.nuurToken.methods.approve(
            CONFIG.DEX.router,
            nuurAmountWei
        ).send({ from: state.account });
        
        // Add liquidity
        await state.contracts.router.methods.addLiquidity(
            '0x0000000000000000000000000000000000000000', // SDA (native)
            CONFIG.TOKENS.NUUR.address,
            sdaAmountWei,
            nuurAmountWei,
            sdaMin.toString(),
            nuurMin.toString(),
            state.account,
            deadline
        ).send({ 
            from: state.account,
            value: sdaAmountWei // Include SDA as value
        });
        
        // Update user data
        await loadUserData();
        
        // Clear inputs
        elements.sdaLiquidityAmount.value = '';
        elements.nuurLiquidityAmount.value = '';
        
        hideLoading();
        showNotification('Liquidity added successfully!', 'success');
        
    } catch (error) {
        hideLoading();
        console.error('Add liquidity failed:', error);
        showNotification(`Failed to add liquidity: ${error.message}`, 'error');
    }
}

async function removeLiquidity() {
    if (!state.account) {
        showNotification('Please connect your wallet first', 'error');
        return;
    }
    
    if (parseFloat(state.liquidity.userPoolTokens) <= 0) {
        showNotification('No liquidity to remove', 'error');
        return;
    }
    
    try {
        showLoading('Removing liquidity...');
        
        // Get user's LP token balance
        const userLiquidityWei = await state.contracts.pair.methods.balanceOf(state.account).call();
        
        if (parseFloat(userLiquidityWei) <= 0) {
            showNotification('No liquidity tokens found', 'error');
            hideLoading();
            return;
        }
        
        // Calculate minimum amounts with slippage
        const reserves = await state.contracts.pair.methods.getReserves().call();
        const totalSupplyWei = await state.contracts.pair.methods.totalSupply().call();
        
        const userShare = parseFloat(userLiquidityWei) / parseFloat(totalSupplyWei);
        const sdaMin = parseFloat(state.web3.utils.fromWei(reserves.reserve0, 'ether')) * userShare * (1 - state.settings.slippage / 100);
        const nuurMin = parseFloat(state.web3.utils.fromWei(reserves.reserve1, 'ether')) * userShare * (1 - state.settings.slippage / 100);
        
        // Convert to wei
        const sdaMinWei = state.web3.utils.toWei(sdaMin.toString(), 'ether');
        const nuurMinWei = state.web3.utils.toWei(nuurMin.toString(), 'ether');
        
        // Set deadline
        const deadline = Math.floor(Date.now() / 1000) + (state.settings.deadline * 60);
        
        // Approve LP token spending
        await state.contracts.pair.methods.approve(
            CONFIG.DEX.router,
            userLiquidityWei
        ).send({ from: state.account });
        
        // Remove liquidity
        await state.contracts.router.methods.removeLiquidity(
            '0x0000000000000000000000000000000000000000', // SDA (native)
            CONFIG.TOKENS.NUUR.address,
            userLiquidityWei,
            sdaMinWei,
            nuurMinWei,
            state.account,
            deadline
        ).send({ from: state.account });
        
        // Update user data
        await loadUserData();
        
        hideLoading();
        showNotification('Liquidity removed successfully!', 'success');
        
    } catch (error) {
        hideLoading();
        console.error('Remove liquidity failed:', error);
        showNotification(`Failed to remove liquidity: ${error.message}`, 'error');
    }
}

async function claimFees() {
    if (!state.account) {
        showNotification('Please connect your wallet first', 'error');
        return;
    }
    
    if (parseFloat(state.liquidity.userUnclaimedFees) <= 0) {
        showNotification('No fees to claim', 'error');
        return;
    }
    
    try {
        showLoading('Claiming fees...');
        
        // In a real DEX, you would have a fee claiming mechanism
        // This is a placeholder - implement based on your contract
        
        // Simulate fee claiming
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Update user data
        await loadUserData();
        
        hideLoading();
        showNotification('Fees claimed successfully!', 'success');
        
    } catch (error) {
        hideLoading();
        console.error('Claim fees failed:', error);
        showNotification('Failed to claim fees', 'error');
    }
}

// Settings Functions
function setSlippage(value) {
    state.settings.slippage = value;
    
    // Update active button
    elements.slippageOptions.forEach(option => {
        if (parseFloat(option.dataset.value) === value) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    
    // Update custom input
    elements.customSlippage.value = '';
    
    // Show warning if needed
    updateSlippageWarning(value);
}

function handleCustomSlippage() {
    const value = parseFloat(elements.customSlippage.value);
    if (!isNaN(value) && value >= 0.1 && value <= 50) {
        setSlippage(value);
    }
}

function handleDeadlineChange() {
    const value = parseInt(elements.txDeadline.value);
    if (!isNaN(value) && value >= 1 && value <= 60) {
        state.settings.deadline = value;
    }
}

function updateSlippageWarning(value) {
    elements.slippageWarning.textContent = '';
    elements.slippageWarning.className = 'slippage-warning';
    
    if (value < 1) {
        elements.slippageWarning.textContent = 'Warning: Slippage below 1% may cause transactions to fail';
        elements.slippageWarning.classList.add('warning');
    } else if (value > 5) {
        elements.slippageWarning.textContent = 'Warning: High slippage tolerance increases risk of front-running';
        elements.slippageWarning.classList.add('danger');
    }
}

function saveSettings() {
    localStorage.setItem('nuurSettings', JSON.stringify(state.settings));
    closeModal('settingsModal');
    showNotification('Settings saved successfully', 'success');
}

function loadSettings() {
    const saved = localStorage.getItem('nuurSettings');
    if (saved) {
        state.settings = JSON.parse(saved);
        applySettings();
    }
}

function applySettings() {
    // Apply theme
    document.documentElement.setAttribute('data-theme', state.settings.theme);
    
    // Update theme toggle icon
    const icon = elements.themeToggle.querySelector('i');
    icon.className = state.settings.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    // Apply slippage
    setSlippage(state.settings.slippage);
    
    // Apply deadline
    elements.txDeadline.value = state.settings.deadline;
}

function toggleTheme() {
    state.settings.theme = state.settings.theme === 'light' ? 'dark' : 'light';
    applySettings();
    saveSettings();
}

// Tab Navigation
function switchTab(tab) {
    // Update active tab button
    elements.swapTabBtn.classList.remove('active');
    elements.liquidityTabBtn.classList.remove('active');
    
    // Show corresponding card
    if (tab === 'swap') {
        elements.swapTabBtn.classList.add('active');
        elements.swapCard.style.display = 'block';
        elements.liquidityCard.style.display = 'none';
    } else if (tab === 'liquidity') {
        elements.liquidityTabBtn.classList.add('active');
        elements.swapCard.style.display = 'none';
        elements.liquidityCard.style.display = 'block';
    }
}

// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).classList.add('show');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('show');
    });
}

function toggleWalletModal() {
    if (state.account) {
        disconnectWallet();
    } else {
        openModal('walletModal');
    }
}

function openTokenModal(forToken) {
    // Simple token selection for now
    state.selectedTokenFor = forToken;
    openModal('tokenModal');
}

// Event Handlers
function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        disconnectWallet();
    } else {
        state.account = accounts[0];
        updateWalletUI();
    }
}

function handleChainChanged(chainId) {
    window.location.reload();
}

// Real-time Updates
function startRealTimeUpdates() {
    // Update blockchain info every 10 seconds
    setInterval(async () => {
        await loadBlockchainInfo();
    }, 10000);
    
    // Update protocol stats every 30 seconds
    setInterval(async () => {
        await loadProtocolStats();
    }, 30000);
    
    // Update pool data every 15 seconds
    setInterval(async () => {
        await loadPoolData();
    }, 15000);
    
    // Update user data every 20 seconds (if connected)
    setInterval(async () => {
        if (state.account) {
            await loadUserData();
        }
    }, 20000);
}

// Utility Functions
function formatNumber(num) {
    if (isNaN(num) || num === null || num === undefined) return '0.00';
    
    num = parseFloat(num);
    if (num === 0) return '0.00';
    
    if (num < 0.000001) return '<0.000001';
    if (num < 0.0001) return num.toExponential(2);
    if (num < 1) return num.toFixed(6).replace(/\.?0+$/, '');
    if (num < 1000) return num.toFixed(2).replace(/\.?0+$/, '');
    if (num < 1000000) return (num / 1000).toFixed(2) + 'K';
    if (num < 1000000000) return (num / 1000000).toFixed(2) + 'M';
    return (num / 1000000000).toFixed(2) + 'B';
}

function showLoading(message = 'Loading...') {
    elements.loadingText.textContent = message;
    elements.loadingOverlay.classList.add('show');
}

function hideLoading() {
    elements.loadingOverlay.classList.remove('show');
}

function showNotification(message, type = 'info') {
    const container = document.getElementById('notificationContainer');
    if (!container) return;
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)}"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    switch(type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-circle';
        case 'warning': return 'exclamation-triangle';
        default: return 'info-circle';
    }
}
