<template>
    <div class="nav-bar">
       <router-link to="/">
        <div class="logo">
          <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
            <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
          </svg>
        </div>
      </router-link>
      <router-link to="/">
        <div>
          <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
            <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
          </svg>
        </div>
      </router-link>
      <router-link to="/app">
        <div>
            <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
              <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
            </svg>
          </div>
        </router-link>
      <router-link to="/login">
      <div>
          <svg  x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
            <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
          </svg>
        </div>
        </router-link>
      <router-link to="/user">
      <div>
          <svg x="0px" y="0px" viewBox="0 0 512 512" fill="currentColor" xml:space="preserve">
            <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/>
          </svg>
        </div>
        </router-link>
    </div>
</template>

<script>

export default {
  name: "AppNavBar",
}
</script>
<style lang="less">
  .nav-bar {
    background: #0073c7;
    flex-basis: 70px;
    min-width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    a {
      padding: 10px;
      &>div {
        width: 20px;
        height: 20px;
        color: #fff;
      }
    }
  }
</style>